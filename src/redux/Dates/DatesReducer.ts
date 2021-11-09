import { AnyAction } from '@reduxjs/toolkit';
import { CHANGE_DATE } from './DatesActions'

const dates = (state = null, action: AnyAction): any => {
  switch (action.type) {
    case CHANGE_DATE:
      return action.dates
    default:
      return state
  }
}

export default dates