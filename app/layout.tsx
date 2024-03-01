import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { FavoriteStorage, GlobalStorage } from './GlobalContext';
import { Header } from './components/Header';

import { Suspense } from 'react';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Github Repositories',
  description: 'Show user, repositories and save repositories to favorites',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalStorage>
          <Suspense>
            <Header />
            <FavoriteStorage>{children}</FavoriteStorage>
          </Suspense>
        </GlobalStorage>
      </body>
    </html>
  );
}
