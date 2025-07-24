'use client';

import { LoginForm } from '@/components/LoginForm';
import { Modal } from '@/components/Modal';
import { useLoginModal } from '@/hooks/use-login-modal';

export const LoginModal = () => {
  const { isOpen, setIsOpen } = useLoginModal();

  return (
    <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      size="sm"
    >
      <LoginForm />
    </Modal>
  );
};
