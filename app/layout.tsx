import Head from 'next/head';
import { Manrope } from 'next/font/google';

import './global.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: '800',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
        <link rel="preconnect" href="https://api.adviceslip.com" />
        <link rel="dns-prefetch" href="https://api.adviceslip.com" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
