import en_US from './en-US';
import fr_FR from './fr-FR';
import { createIntl, createIntlCache, IntlShape } from 'react-intl';

// Translation mapping
export const translations: Record<string, Record<string, string>> = {
  'en-US': en_US,
  'fr-FR': fr_FR,
};

export const localeKeys = Object.keys(translations);

const cache = createIntlCache();
const DEFAULT_LOCAL_FALLBACK = 'en-US';

/**
 * Load tranlation messages of a given local
 * @param {string} locale Local to load in standard format
 */
export const loadTranslations = (locale: string): IntlShape => {
  // Local control and global fallback
  if (!locale || !translations[locale]) {
    console.warn(
      `Locale "${locale}" not found. Falling back to ${DEFAULT_LOCAL_FALLBACK}.`,
    );
    return loadTranslations(DEFAULT_LOCAL_FALLBACK);
  }

  // Create and return the Intl instance
  return createIntl({ locale, messages: translations[locale] }, cache);
};
