import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mt-24 mb-16 flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
