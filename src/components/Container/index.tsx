import { cn } from '@/libs/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn('mx-auto max-w-6xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
);
