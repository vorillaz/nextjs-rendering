import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavMenu } from './components/nav-menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Rendering Patterns',
  description: 'Demonstration of different Next.js rendering patterns',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenu />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}