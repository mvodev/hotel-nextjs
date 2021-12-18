import ReviewData from './Types';

const validate = (values: ReviewData): Record<string, string> => {
  const REQUIRED_FIELDS: ('review' | 'impression')[] = ['review', 'impression'];
  const errors: Record<string, string> = {};

  REQUIRED_FIELDS.forEach((key) => {
    if (values[key] === undefined) {
      errors[key] = 'Это поле обязательно к заполнению';
    }
  });

  return errors;
};

export default validate;
