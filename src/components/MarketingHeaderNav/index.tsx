'use client';

import { Button } from '@/components/Common';
import { useLoginModal } from '@/hooks/use-login-modal';

export const MarketingHeaderNav = () => {
  const { open } = useLoginModal();

  return (
    <nav>
      <Button onClick={() => open()}>ログイン</Button>
    </nav>
  );
};
