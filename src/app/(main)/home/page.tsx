import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { Container } from '@/components/Container';

const Page = async () => {
  // const session = await auth();

  // if (!session) redirect('/');

  return (
    <Container>
      <h1 className="mb-8 text-3xl font-bold">Articles</h1>
    </Container>
  );
};

export default Page;
