// типы экшенов

export const CHANGE_DATE = 'CHANGE_DATE';

// генераторы экшенов

export function changeDate(dates: Date[]): { type: string; dates: Date[] } {
  return { type: CHANGE_DATE, dates };
}
