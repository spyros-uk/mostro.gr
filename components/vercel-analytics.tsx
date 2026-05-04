'use client';

import dynamic from 'next/dynamic';

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then((m) => ({ default: m.Analytics })),
  { ssr: false },
);

export function VercelAnalytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  return <Analytics />;
}
