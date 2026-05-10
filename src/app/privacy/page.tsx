import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Protection of personal data | Mostro RIBs',
  description: 'How we handle personal data when you use Mostro.gr.',
};

export default function PrivacyPage() {
  return <LegalPage doc="privacy" />;
}
