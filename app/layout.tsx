import { Manrope } from 'next/font/google';

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
      <body>{children}</body>
    </html>
  );
}
