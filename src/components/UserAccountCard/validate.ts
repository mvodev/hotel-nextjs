import FormData, { FormKey } from './Types';

const validate = (values: FormData): Record<string, string> => {
  const errors: Record<string, string> = {};
  const REQUIRED_FIELDS: FormKey[] = [
    'email',
    'password',
  ];

  if (values.password && values.password.length < 6) {
    errors.password = 'Пароль не может быть менее 6 символов';
  }

  if (values.email && !values.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    errors.email = 'Введен некорректный email';
  }

  return errors;
};

export default validate;
