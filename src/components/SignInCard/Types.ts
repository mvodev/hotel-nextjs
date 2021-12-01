type FormData = {
  email: string;
  password: string;
};

type FormKey =
  | 'email'
  | 'password';

export default FormData;
export type { FormKey };
