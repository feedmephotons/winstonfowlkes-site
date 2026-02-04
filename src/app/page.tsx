import Hero from '@/components/Hero';
import SystemsOverview from '@/components/SystemsOverview';
import Process from '@/components/Process';
import VideoShowcase from '@/components/VideoShowcase';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import Metrics from '@/components/Metrics';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SystemsOverview />
      <Process />
      <VideoShowcase />
      <FeaturedCaseStudy />
      <Metrics />
      <Testimonials />
      <CTA />
    </>
  );
}
