'use client';

import Image from 'next/image';
import { Button } from '@/components/Common';
import { Container } from '@/components/Container';

export const Hero = () => (
  <div className="bg-neutral-100 pt-16 pb-32 md:pt-32">
    <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <Image
        src="/images/hero.png"
        alt="Hero Image"
        width={400}
        height={400}
        className="object-cover"
      />
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
          <span className="block">記事を共有して、</span>
          <span className="block text-blue-600">知見を広げよう</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          TechShareは、エンジニアのための技術記事共有プラットフォームです。
          あなたの知見を共有し、他のエンジニアの知見を学びましょう。
        </p>
        <div className="mt-2 sm:mt-12">
          <Button
            onClick={() => {}}
            size="lg"
          >
            無料で始める
          </Button>
        </div>
      </div>
    </Container>
  </div>
);
