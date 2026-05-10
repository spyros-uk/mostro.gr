import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Cookie Policy | Mostro RIBs',
  description: 'Information about cookies and similar technologies on Mostro.gr.',
};

export default function CookiesPage() {
  return <LegalPage doc="cookies" />;
}
