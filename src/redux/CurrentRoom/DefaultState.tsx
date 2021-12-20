const DefaultState = {
  isLoading: false,
  isBookBlock: false,
  roomID: '',
  gallery: ['', '', ''],
  information: [],
  impressions: {
    perfect: 0,
    good: 0,
    satisfactory: 0,
    poor: 0,
  },
  rules: [],
  cancellation: '',
  price: 0,
  roomNumber: 0,
  isLux: false,
  bookedDays: [],
  maxGuests: 0,
  discount: 0,
  serviceFee: 0,
  additionalServicesFee: 0,

  maySmoking: false,
  mayWithPets: false,
  mayInviteGuests: false,

  wideСorridor: false,
  assistantForDisabled: false,

  bedrooms: 0,
  beds: 0,
  bathrooms: 0,

  haveBreakfast: false,
  haveDesk: false,
  haveFeedingChair: false,
  haveCrib: false,
  haveTV: false,
  haveShampoo: false,
};

export default DefaultState;
