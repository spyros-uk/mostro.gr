import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { boats, getBoatBySlug } from '@/lib/boats';
import { BoatPageClient } from '@/components/boat-page-client';

export function generateStaticParams() {
  return boats.map((b) => ({ slug: b.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const boat = getBoatBySlug(slug);
  if (!boat) {
    return { title: 'Boat Not Found | Mostro RIBs' };
  }
  return {
    title: `${boat.name} | Mostro RIBs`,
    description: boat.description,
  };
}

export default async function BoatDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const boat = getBoatBySlug(slug);
  if (!boat) {
    notFound();
  }
  return <BoatPageClient boat={boat} />;
}
