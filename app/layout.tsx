import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Conveyance Logistics',
  description: 'Innovative Logistics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @page {
            size: A4;
            margin: 0;
          }
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
          }
        `}</style>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}