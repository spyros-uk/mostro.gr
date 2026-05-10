import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Anchor, MapPin, Phone, Mail } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/site-contact';
import { categories } from '@/lib/boats';

export function Footer() {
  const { t } = useTranslation();
  const addressShort = t('contactAddress.addressShort', {
    defaultValue: SITE_CONTACT.addressShort,
  });

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-10 mb-8">
          {/* Col 1: Brand + description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                <Anchor className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                mostro<span className="text-accent">.gr</span>
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed text-sm md:text-base">
              {t('footer.blurb')}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h2 className="text-base font-semibold mb-4">{t('footer.quickLinks')}</h2>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="/#boats" className="hover:text-background transition-colors">
                  {t('footer.ourBoats')}
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-background transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-background transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Model series */}
          <div>
            <h2 className="text-base font-semibold mb-4">{t('footer.modelSeries')}</h2>
            <ul className="space-y-2 text-background/70 text-sm">
              <li className="flex flex-wrap gap-x-3 gap-y-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.value}
                    href="/#boats"
                    className="hover:text-background transition-colors"
                  >
                    {t(`boatCategories.${cat.value}`)}
                  </Link>
                ))}
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h2 className="text-base font-semibold mb-4">{t('footer.contactHeading')}</h2>
            <div className="space-y-3 text-sm text-background/80">
              <a
                href={SITE_CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 hover:text-background transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden />
                <span>{addressShort}</span>
              </a>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href={`tel:${SITE_CONTACT.phoneE164}`}
                  className="inline-flex gap-2 items-center shrink-0 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden />
                  {SITE_CONTACT.phoneDisplay}
                </a>
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="inline-flex gap-2 items-center min-w-0 hover:text-background transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden />
                  {SITE_CONTACT.email}
                </a>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href={SITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/80 hover:bg-background/20 hover:text-background transition-colors"
                aria-label={t('footer.instagramAria')}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={SITE_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/80 hover:bg-background/20 hover:text-background transition-colors"
                aria-label={t('footer.facebookAria')}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <p className="text-sm text-background/50 w-full md:flex-1 text-center md:text-left">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <a
            href="https://spyros.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif italic text-[0.95rem] sm:text-base font-medium tracking-[0.04em] text-background/55 hover:text-background transition-colors text-center shrink-0"
          >
            {t('footer.credit')}
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-background/50 w-full md:flex-1 justify-center md:justify-end">
            <Link href="/privacy/" className="hover:text-background transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms/" className="hover:text-background transition-colors">
              {t('footer.terms')}
            </Link>
            <Link href="/cookies/" className="hover:text-background transition-colors">
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
