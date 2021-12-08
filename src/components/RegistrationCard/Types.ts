type FormData = {
  name: string;
  surname: string;
  gender: 'man' | 'woman';
  birthday: string;
  email: string;
  password: string;
  specialOffers: boolean;
};

type FormKey =
  | 'name'
  | 'surname'
  | 'gender'
  | 'birthday'
  | 'email'
  | 'password'
  | 'specialOffers';

export default FormData;
export type { FormKey };
