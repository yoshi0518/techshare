import { Container } from '@/components/Container';
import { UserButton } from '@/features/auth/components/user-button';

export const Header = () => (
  <header className="fixed top-0 z-10 mb-16 w-full border-b border-neutral-200 bg-white">
    <Container className="flex h-16 items-center justify-between">
      <h1 className="text-2xl font-bold">
        Tech<span className="text-blue-600">Share</span>
      </h1>
      <nav className="flex items-center gap-4">
        <UserButton />
      </nav>
    </Container>
  </header>
);
