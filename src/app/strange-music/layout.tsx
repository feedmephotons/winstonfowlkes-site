import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Winston Fowlkes | Graphic Design Portfolio for Strange Music",
  description: "Creative portfolio and design showcase for Strange Music. 15+ years of experience across the Adobe Creative Suite, Blender, After Effects, and more.",
  robots: { index: false, follow: false },
};

export default function StrangeMusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="strange-music-page">
      {children}
    </div>
  );
}
