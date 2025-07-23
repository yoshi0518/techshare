import { CallToAction } from '@/components/CallToAction';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { MarketingHeader } from '@/components/MarketingHeader';

const Page = () => (
  <main className="min-h-screen">
    <MarketingHeader />
    <Hero />
    <Features />
    <CallToAction />
    <Footer />
  </main>
);

export default Page;
