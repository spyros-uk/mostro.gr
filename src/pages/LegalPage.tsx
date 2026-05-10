import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type LegalDocId = 'privacy' | 'terms' | 'cookies';

type LegalSection = { heading: string; body: string };

function parseSections(raw: unknown): LegalSection[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (item): item is LegalSection =>
      item !== null &&
      typeof item === 'object' &&
      typeof (item as LegalSection).heading === 'string' &&
      typeof (item as LegalSection).body === 'string',
  );
}

export function LegalPage({ doc }: { doc: LegalDocId }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t(`legalDocs.${doc}.metaTitle`);
  }, [doc, t, i18n.language]);

  const sections = parseSections(t(`legalDocs.${doc}.sections`, { returnObjects: true }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-10 md:py-14 max-w-3xl pb-28 md:pb-32">
        <Button variant="ghost" size="sm" className="mb-8 -ml-2 gap-2" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            {t('legalDocs.common.backHome')}
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground mb-2">{t(`legalDocs.${doc}.updated`)}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-balance">
          {t(`legalDocs.${doc}.title`)}
        </h1>
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold text-foreground mb-3">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
