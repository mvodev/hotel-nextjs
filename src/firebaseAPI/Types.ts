type UserDataType = {
  email: string,
  password: string,
  name: string,
  surname: string,
  photo: string,
  gender: 'man' | 'woman',
  birthday: Date
}

type UserType = {
  uid: string,
  email: string
}

export type { UserDataType, UserType }