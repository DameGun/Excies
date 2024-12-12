import i18n from '@/i18n';

export function dateParser(date: string) {
  const obj = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return obj.toLocaleDateString(i18n.language, options).toUpperCase();
}
