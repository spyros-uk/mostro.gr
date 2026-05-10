import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Terms of Service | Mostro RIBs',
  description: 'Terms governing use of Mostro.gr.',
};

export default function TermsPage() {
  return <LegalPage doc="terms" />;
}
