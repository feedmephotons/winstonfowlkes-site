import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: 'AIzaSyC76WTIrf2_bhSH-uzkpVpyYLKzaDoDxmA' });

const refImagePath = path.join(import.meta.dirname, 'AZNcJT4o.jpg');
const refImageBase64 = fs.readFileSync(refImagePath).toString('base64');

async function generateImage(prompt, filename, aspectRatio = '1:1') {
  const outDir = path.join(import.meta.dirname, 'generated');
  const outPath = path.join(outDir, filename);

  if (fs.existsSync(outPath)) {
    console.log(`SKIP: ${filename} already exists`);
    return true;
  }

  console.log(`GENERATING: ${filename} | AR: ${aspectRatio}`);
  console.log(`  PROMPT: ${prompt.substring(0, 100)}...`);

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: [{
        role: 'user',
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: refImageBase64 } },
          { text: prompt }
        ]
      }],
      generationConfig: {
        responseModalities: ['image', 'text'],
        ...(aspectRatio !== '1:1' && { aspectRatio })
      }
    });

    const parts = result.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        const imgData = Buffer.from(part.inlineData.data, 'base64');
        fs.writeFileSync(outPath, imgData);
        console.log(`SUCCESS: ${filename} (${(imgData.length / 1024).toFixed(0)}KB)`);
        return true;
      }
    }
    console.log(`NO IMAGE in response for ${filename}`);
    return false;
  } catch (err) {
    console.error(`ERROR: ${filename} - ${err.message}`);
    return false;
  }
}

// Read args: JSON array of {prompt, filename, aspectRatio}
const args = JSON.parse(process.argv[2]);
const results = { success: 0, fail: 0, total: args.length };

for (const item of args) {
  const ok = await generateImage(item.prompt, item.filename, item.aspectRatio || '1:1');
  if (ok) results.success++; else results.fail++;
  // Small delay between requests to avoid rate limiting
  await new Promise(r => setTimeout(r, 2000));
}

console.log(`\nDONE: ${results.success}/${results.total} succeeded, ${results.fail} failed`);
