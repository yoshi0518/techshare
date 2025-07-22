'use client';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { MarketingHeaderNav } from '@/components/MarketingHeaderNav';

export const MarketingHeader = () => (
  <header className="fixed top-0 z-10 mb-16 w-full border-b border-neutral-200 bg-white">
    <Container className="flex h-16 items-center justify-between">
      <Logo />
      <MarketingHeaderNav />
    </Container>
  </header>
);
