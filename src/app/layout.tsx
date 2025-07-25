import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { env } from '@/env';
import { QueryProvider } from '@/libs/query-provider';

import '@/styles/globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Techshare',
  description: 'Techshare',
  keywords: ['Techshare'],
  robots: {
    index: !env.DEBUG, // falseでnoindex
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html
    lang="ja"
    className={notoSansJP.className}
  >
    <body>
      <QueryProvider>{children}</QueryProvider>
    </body>
  </html>
);

export default RootLayout;
