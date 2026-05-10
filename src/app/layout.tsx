import type { Metadata } from 'next';
import { Providers } from './providers';
import { CookieNotice } from '@/components/cookie-notice';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mostro RIBs | Premium Sport Rigid Inflatable Boats in Greece',
  description:
    'Discover our collection of premium Sport Rigid Inflatable Boats (RIBs) from 2-11 meters.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <CookieNotice />
        </Providers>
      </body>
    </html>
  );
}
