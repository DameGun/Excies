import type { TimePostfix } from '@/constants/dateParser';
import { timeDifferenceCalculations } from '@/constants/dateParser';
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

function timeDifferencePostfix(timePostfix: TimePostfix, timeDifference: number) {
  const rtf = new Intl.RelativeTimeFormat(i18n.language, { style: 'long' });
  return rtf.format(timeDifference, timePostfix);
}

export function formatLastTimeUpdatedDate(date: string | null) {
  if (date === null) return '';

  const serverDate = new Date(date.split('.')[0]);
  const currentDate = new Date();

  let timePostfix: TimePostfix;

  for (timePostfix in timeDifferenceCalculations) {
    const methodName = timeDifferenceCalculations[timePostfix];

    const timeValueServer = serverDate[methodName]();
    const timeValueCurrent = currentDate[methodName]();

    const timeDifference = timeValueServer - timeValueCurrent;

    if (timeDifference !== 0) {
      return timeDifferencePostfix(timePostfix, timeDifference);
    }
  }
}
