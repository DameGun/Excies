import type { DateMethods } from '@/types/dateParser';

export enum TimePostfix {
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Minute = 'minute',
  Second = 'second',
}

export const timeDifferenceCalculations: Record<TimePostfix, DateMethods> = {
  [TimePostfix.Year]: 'getFullYear',
  [TimePostfix.Month]: 'getMonth',
  [TimePostfix.Day]: 'getDate',
  [TimePostfix.Hour]: 'getHours',
  [TimePostfix.Minute]: 'getMinutes',
  [TimePostfix.Second]: 'getSeconds',
};
