/** Public contact and social URLs for Mostro (single source for footer + contact section). */

export type SiteContact = Readonly<{
  addressLine1: string;
  addressLine2: string;
  /** One-line address for compact UI (e.g. footer). */
  addressShort: string;
  mapsUrl: string;
  phoneE164: string;
  phoneDisplay: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string;
  hoursSummary: string;
  /** Optional second line; omitted or empty string is not rendered. */
  hoursNote?: string;
}>;

export const SITE_CONTACT: SiteContact = {
  addressLine1: '91 Ethnikis Antistaseos & Spaton',
  addressLine2: 'Pallini 153 51, Greece',
  addressShort: '91 Ethnikis Antistaseos, Pallini, Greece',
  mapsUrl: 'https://maps.app.goo.gl/UEkNGXA6u1jExatd8',
  phoneE164: '+302106038034',
  phoneDisplay: '+30 210 603 8034',
  email: 'Info@mostro.gr',
  instagramUrl: 'https://www.instagram.com/mostro_boats/',
  facebookUrl:
    'https://www.facebook.com/people/Mostro-boats/100065199331991/',
  hoursSummary:
    'Monday–Saturday: 9:00 a.m.–4:30 p.m. · Sunday closed.',
};
