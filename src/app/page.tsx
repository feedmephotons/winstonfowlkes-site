import Hero from '@/components/Hero';
import SystemsOverview from '@/components/SystemsOverview';
import VideoShowcase from '@/components/VideoShowcase';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SystemsOverview />
      <VideoShowcase />
      <Testimonials />
      <CTA />
    </>
  );
}
