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

  const minute = 60000;
  const hour = 3600000;
  const day = 86400000;
  const week = 604800000;
  const month = day * 30;
  const yer = 31536000000;

  if (timeDelta < hour)
    return getValue(timeDelta, minute, ['минуту', 'минуты', 'минут']);
  if (timeDelta < day)
    return getValue(timeDelta, hour, ['час', 'часа', 'часов']);
  if (timeDelta < week)
    return getValue(timeDelta, day, ['день', 'дня', 'дней']);
  if (timeDelta < month)
    return getValue(timeDelta, week, ['неделю', 'недели', 'недель']);
  if (timeDelta < yer)
    return getValue(timeDelta, month, ['месяц', 'месяца', 'месяцев']);
  return getValue(timeDelta, yer, ['год', 'года', 'лет']);
};
