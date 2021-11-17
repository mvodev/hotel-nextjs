export function getPosInSpellCasesArray(result: number): number {
  const cases = [2, 0, 1, 1, 1, 2];
  return result % 100 > 4 && result % 100 < 20
    ? 2
    : cases[result % 10 < 5 ? result % 10 : 5];
}

export default getPosInSpellCasesArray;

export const getDeclension = (
  quantity: number,
  dictionary: [string, string, string]
): string => dictionary[getPosInSpellCasesArray(quantity)];

export const dateToTimeAgo = (date: Date): string => {
  const now = new Date();
  const timeDelta = now.valueOf() - date.valueOf();

  const getValue = (
    numerator: number,
    denominator: number,
    unitsOfMeasurement: [string, string, string]
  ): string => {
    const value = Math.trunc(numerator / denominator);
    const usedValue = value > 0 ? value : 1;

    if (usedValue > 1)
      return `${usedValue} ${getDeclension(
        usedValue,
        unitsOfMeasurement
      )} назад`;

    const result = `${getDeclension(
      usedValue,
      unitsOfMeasurement
    )} назад`.split('');
    result[0] = result[0].toUpperCase();
    return result.join('');
  };

  const MINUTE = 60000;
  const HOUR = 3600000;
  const DAY = 86400000;
  const WEEK = 604800000;
  const MONTH = DAY * 30;
  const YER = 31536000000;

  if (timeDelta < HOUR)
    return getValue(timeDelta, MINUTE, ['минуту', 'минуты', 'минут']);
  if (timeDelta < DAY)
    return getValue(timeDelta, HOUR, ['час', 'часа', 'часов']);
  if (timeDelta < WEEK)
    return getValue(timeDelta, DAY, ['день', 'дня', 'дней']);
  if (timeDelta < MONTH)
    return getValue(timeDelta, WEEK, ['неделю', 'недели', 'недель']);
  if (timeDelta < YER)
    return getValue(timeDelta, MONTH, ['месяц', 'месяца', 'месяцев']);
  return getValue(timeDelta, YER, ['год', 'года', 'лет']);
};
