import ReviewData from './Types';

const validate = (values: ReviewData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (values.review === undefined) {
    errors.review = 'Это поле обязательно к заполнению';
  }

  if (values.impression === undefined) {
    errors.impression = 'Укажите насколько вы впечатлены номером';
  }

  return errors;
};

export default validate;
