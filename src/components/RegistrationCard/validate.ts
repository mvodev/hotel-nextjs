import { stringIsDate } from 'src/utils/Utils';
import FormData, { FormKey } from './Types';

const validate = (values: FormData): Record<string, string> => {
  const errors: Record<string, string> = {};
  const REQUIRED_FIELDS: FormKey[] = [
    'name',
    'surname',
    'gender',
    'birthday',
    'email',
    'password',
    'specialOffers',
  ];

  if (!stringIsDate(values.birthday)) {
    errors.birthday = 'Введена некорректная дата';
  }

  if (values.password && values.password.length < 6) {
    errors.password = 'Пароль не может быть менее 6 символов';
  }

  if (values.email && !values.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    errors.email = 'Введен некорректный email';
  }

  REQUIRED_FIELDS.forEach((field) => {
    if (values[field] === undefined) {
      errors[field] = 'Это поле обязательно к заполнению';
    }
  });

  return errors;
};

export default validate;
