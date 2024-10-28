export function dateParser(date: string) {
  const obj = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return obj.toLocaleDateString(undefined, options).toUpperCase();
}
