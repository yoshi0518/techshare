'use client';

import { Button } from '@/components/Common';
import { Container } from '@/components/Container';

export const CallToAction = () => (
  <div className="bg-neutral-100">
    <Container className="py-32 text-center md:py-40">
      <h2 className="text-2xl font-extrabold text-neutral-900 md:text-4xl">エンジニアの知見を共有しよう</h2>
      <p className="mt-4 text-lg leading-6 text-neutral-500">
        あなたの経験や知識が、誰かの助けになります。 今すぐTechShareで技術記事の共有を始めましょう。
      </p>
      <div className="mt-8">
        <Button
          size="lg"
          onClick={() => {}}
        >
          無料で始める
        </Button>
      </div>
    </Container>
  </div>
);
