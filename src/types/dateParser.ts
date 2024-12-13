type DateMethods = keyof Pick<
  Date,
  'getFullYear' | 'getMonth' | 'getDate' | 'getHours' | 'getMinutes' | 'getSeconds'
>;

export type { DateMethods };
