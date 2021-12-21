type AddBookActionType = {
  type: 'ADD_BOOK';
  payload: {
    userID: string,
    roomID: string,
    dates: [Date, Date],
  }
}

type AddBookResultType = {
  isBooked: boolean,
  massage: string,
}

export type { AddBookActionType, AddBookResultType };