import { Timestamp } from '@firebase/firestore';

type UserDataType = {
  email: string,
  password: string,
  name: string,
  surname: string,
  photo?: string,
  gender: 'man' | 'woman',
  birthday: Date
}

type UserType = {
  uid: string;
  email: string | null;
};

type CommentType = {
  uid: string;
  roomID:string;
  isLiked:boolean;
  text:string;
}

type RoomType = {
  gallery: string[];
  information: {
    icon: string;
    title: string;
    description: string;
  }[];
  impressions: {
    perfect: number;
    good: number;
    satisfactory: number;
    poor: number;
  };
  rules: string[];
  cancellation: string;
  price: number;
  roomNumber: number;
  isLux: boolean;
  bookedDays: Date[];
  maxGuests: number;
  discount: number;
  serviceFee: number;
  additionalServicesFee: number;

  maySmoking: boolean;
  mayWithPets: boolean;
  mayInviteGuests: boolean;

  wideСorridor: boolean;
  assistantForDisabled: boolean;

  bedrooms: number;
  beds: number;
  bathrooms: number;

  haveBreakfast: boolean;
  haveDesk: boolean;
  haveFeedingChair: boolean;
  haveCrib: boolean;
  haveTV: boolean;
  haveShampoo: boolean;
};

type FiltersAPIType = {
  dates: [number, number] | [null, null];
  guests: {
    adult: number;
    child: number;
    infants: number;
  };
  price: {
    min: number;
    max: number;
    from: number;
    to: number;
  };
  rules: {
    maySmoking: {
      text: string;
      checked: boolean;
    };
    mayWithPets: {
      text: string;
      checked: boolean;
    };
    mayInviteGuests: {
      text: string;
      checked: boolean;
    };
  };
  availability: {
    wideСorridor: {
      title: string;
      text: string;
      checked: boolean;
    };
    assistantForDisabled: {
      title: string;
      text: string;
      checked: boolean;
    };
  };
  conveniences: {
    bedrooms: {
      text: string;
      value: number;
      spellCases: [string, string, string];
    };
    beds: {
      text: string;
      value: number;
      spellCases: [string, string, string];
    };
    bathrooms: {
      text: string;
      value: number;
      spellCases: [string, string, string];
    };
  };
  additionalConvenience: {
    haveBreakfast: {
      checked: boolean;
      text: string;
    };
    haveDesk: {
      checked: boolean;
      text: string;
    };
    haveFeedingChair: {
      checked: boolean;
      text: string;
    };
    haveCrib: {
      checked: boolean;
      text: string;
    };
    haveTV: {
      checked: boolean;
      text: string;
    };
    haveShampoo: {
      checked: boolean;
      text: string;
    };
  };
};

type ReturnedRoomType = {
  roomID: string;
  gallery: string[];
  information: {
    icon: string;
    title: string;
    description: string;
  }[];
  impressions: {
    perfect: number;
    good: number;
    satisfactory: number;
    poor: number;
  };
  rules: string[];
  cancellation: string;
  price: number;
  roomNumber: number;
  isLux: boolean;
  bookedDays: Timestamp[];
  maxGuests: number;
  discount: number;
  serviceFee: number;
  additionalServicesFee: number;

  maySmoking: boolean;
  mayWithPets: boolean;
  mayInviteGuests: boolean;

  wideСorridor: boolean;
  assistantForDisabled: boolean;

  bedrooms: number;
  beds: number;
  bathrooms: number;

  haveBreakfast: boolean;
  haveDesk: boolean;
  haveFeedingChair: boolean;
  haveCrib: boolean;
  haveTV: boolean;
  haveShampoo: boolean;
};

export type {
  UserDataType,
  UserType,
  RoomType,
  FiltersAPIType,
  ReturnedRoomType,
  CommentType,
};
