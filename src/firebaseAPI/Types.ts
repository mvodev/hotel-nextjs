type UserDataType = {
  email: string,
  password: string,
  name: string,
  surname: string,
  photo: string,
  gender: 'man' | 'woman',
  birthday: string
}

type UserType = {
  uid: string,
  email: string | null
}

export type { UserDataType, UserType }