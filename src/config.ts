export const BRIDE_NAME = 'Shani';
export const GROOM_NAME = 'Kasun';

// Web App URL from the Google Apps Script deployment (see google-apps-script/SETUP.md).
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx6yeA2eeanwmxKE-cZ3AReNRDRZ7REVdnTfSMJPWjW0ANeL1H3-0k5qZUUEBWQH_1o/exec';

/** Combines the admin prefix and guest name into the name shown on the invitation. */
export function buildDisplayName(prefix: string, name: string): string {
  const guest = name.trim().replace(/\s+/g, ' ');
  if (!guest) return '';
  if (prefix === 'Family') return `${guest} and Family`;
  // "Dear" is a greeting style only; the message already starts with "Dear".
  if (prefix === 'Dear' || !prefix) return guest;
  return `${prefix} ${guest}`;
}

/** Reads the guest display name from /{guestName}, falling back to ?title=&name= links. */
export function getInviteeName(location: Location): string {
  const segment = location.pathname.replace(/^\/+|\/+$/g, '');
  if (segment && segment !== 'admin') {
    try {
      return decodeURIComponent(segment).trim();
    } catch {
      return segment;
    }
  }

  const params = new URLSearchParams(location.search);
  return `${params.get('title') || ''} ${params.get('name') || ''}`.trim();
}
