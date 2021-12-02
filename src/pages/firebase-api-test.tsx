import type { ReactElement } from 'react';
import { RoomType } from 'src/firebaseAPI/Types';
import Layout from '../components/Layout';
import firebaseAPI from '../firebaseAPI/firebaseAPI';

const rooms: RoomType[] = [
  {
    gallery: [
      'room-2.webp',
      'room-8.webp',
      'room-4.webp',
      'room-5.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 250,
      good: 43,
      satisfactory: 22,
      poor: 5
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 9900,
    roomNumber: 840,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 9),
      new Date(2021, 11, 10),
      new Date(2021, 11, 11),
      new Date(2021, 11, 12),
      new Date(2021, 11, 13),
      new Date(2021, 11, 14),
      new Date(2021, 11, 15),
    ],
    maxGuests: 4,
    discount: 3765,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 2,
    beds: 4,
    bathrooms: 1,

    haveBreakfast: true,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: true,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-3.webp',
      'room-7.webp',
      'room-1.webp',
      'room-12.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 150,
      good: 79,
      satisfactory: 43,
      poor: 9
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 7500,
    roomNumber: 564,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 5),
      new Date(2021, 11, 6),
      new Date(2021, 11, 7),
      new Date(2021, 11, 8),
      new Date(2021, 11, 9),
      new Date(2021, 11, 10),
      new Date(2021, 11, 11),
    ],
    maxGuests: 3,
    discount: 2300,
    serviceFee: 200,
    additionalServicesFee: 250,
    maySmoking: false,
    mayWithPets: true,
    mayInviteGuests: false,

    wideСorridor: true,
    assistantForDisabled: false,

    bedrooms: 3,
    beds: 5,
    bathrooms: 2,

    haveBreakfast: false,
    haveDesk: false,
    haveFeedingChair: false,
    haveCrib: false,
    haveTV: false,
    haveShampoo: false
  },
  {
    gallery: [
      'room-4.webp',
      'room-3.webp',
      'room-9.webp',
      'room-5.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 67,
      good: 37,
      satisfactory: 20,
      poor: 10
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 5430,
    roomNumber: 432,
    isLux: true,
    bookedDays: [
      new Date(2021, 11, 20),
      new Date(2021, 11, 21),
      new Date(2021, 11, 22),
      new Date(2021, 11, 23),
    ],
    maxGuests: 3,
    discount: 1687,
    serviceFee: 0,
    additionalServicesFee: 0,
    maySmoking: true,
    mayWithPets: true,
    mayInviteGuests: true,

    wideСorridor: true,
    assistantForDisabled: true,

    bedrooms: 4,
    beds: 5,
    bathrooms: 3,

    haveBreakfast: true,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: true,
    haveShampoo: false
  },
  {
    gallery: [
      'room-5.webp',
      'room-7.webp',
      'room-2.webp',
      'room-11.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 439,
      good: 215,
      satisfactory: 67,
      poor: 30
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 740,
    roomNumber: 579,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 13),
      new Date(2021, 11, 14),
      new Date(2021, 11, 15),
      new Date(2021, 11, 16),
      new Date(2021, 11, 17),
      new Date(2021, 11, 18),
    ],
    maxGuests: 6,
    discount: 2400,
    serviceFee: 200,
    additionalServicesFee: 150,
    maySmoking: false,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: true,
    assistantForDisabled: true,

    bedrooms: 5,
    beds: 7,
    bathrooms: 3,

    haveBreakfast: false,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: false,
    haveShampoo: true
  },
  {
    gallery: [
      'room-6.webp',
      'room-12.webp',
      'room-8.webp',
      'room-3.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 32,
      good: 11,
      satisfactory: 2,
      poor: 0
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 8655,
    roomNumber: 985,
    isLux: false,
    bookedDays: [],
    maxGuests: 6,
    discount: 1200,
    serviceFee: 60,
    additionalServicesFee: 0,
    maySmoking: true,
    mayWithPets: true,
    mayInviteGuests: false,

    wideСorridor: false,
    assistantForDisabled: false,

    bedrooms: 3,
    beds: 6,
    bathrooms: 2,

    haveBreakfast: true,
    haveDesk: false,
    haveFeedingChair: false,
    haveCrib: true,
    haveTV: true,
    haveShampoo: false
  },
  {
    gallery: [
      'room-9.webp',
      'room-4.webp',
      'room-7.webp',
      'room-10.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 240,
      good: 200,
      satisfactory: 300,
      poor: 50
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 6000,
    roomNumber: 236,
    isLux: true,
    bookedDays: [
      new Date(2022, 1, 9),
      new Date(2022, 1, 10),
      new Date(2022, 1, 11),
      new Date(2022, 1, 12),
      new Date(2022, 1, 13),
      new Date(2022, 1, 14),
      new Date(2022, 1, 15),
    ],
    maxGuests: 6,
    discount: 2376,
    serviceFee: 100,
    additionalServicesFee: 100,
    maySmoking: false,
    mayWithPets: true,
    mayInviteGuests: false,

    wideСorridor: true,
    assistantForDisabled: true,

    bedrooms: 3,
    beds: 4,
    bathrooms: 1,

    haveBreakfast: true,
    haveDesk: false,
    haveFeedingChair: true,
    haveCrib: true,
    haveTV: false,
    haveShampoo: true
  },
  {
    gallery: [
      'room-3.webp',
      'room-8.webp',
      'room-4.webp',
      'room-9.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 21,
      good: 6,
      satisfactory: 2,
      poor: 7
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 7854,
    roomNumber: 276,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 25),
      new Date(2021, 11, 26),
      new Date(2021, 11, 27),
    ],
    maxGuests: 7,
    discount: 0,
    serviceFee: 0,
    additionalServicesFee: 0,
    maySmoking: true,
    mayWithPets: true,
    mayInviteGuests: false,

    wideСorridor: true,
    assistantForDisabled: true,

    bedrooms: 4,
    beds: 7,
    bathrooms: 2,

    haveBreakfast: true,
    haveDesk: true,
    haveFeedingChair: false,
    haveCrib: true,
    haveTV: true,
    haveShampoo: false
  },
  {
    gallery: [
      'room-6.webp',
      'room-3.webp',
      'room-9.webp',
      'room-1.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 321,
      good: 234,
      satisfactory: 76,
      poor: 12
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 8700,
    roomNumber: 587,
    isLux: true,
    bookedDays: [
      new Date(2021, 11, 6),
      new Date(2021, 11, 7),
    ],
    maxGuests: 3,
    discount: 400,
    serviceFee: 0,
    additionalServicesFee: 150,
    maySmoking: true,
    mayWithPets: true,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: false,

    bedrooms: 2,
    beds: 3,
    bathrooms: 1,

    haveBreakfast: true,
    haveDesk: false,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: true,
    haveShampoo: false
  },
  {
    gallery: [
      'room-3.webp',
      'room-9.webp',
      'room-5.webp',
      'room-12.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 450,
      good: 6,
      satisfactory: 11,
      poor: 2
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 7680,
    roomNumber: 154,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 13),
      new Date(2021, 11, 14),
      new Date(2021, 11, 15),
      new Date(2021, 11, 23),
      new Date(2021, 11, 24),
      new Date(2021, 11, 25),
      new Date(2021, 11, 26),
    ],
    maxGuests: 7,
    discount: 1100,
    serviceFee: 40,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 2,
    beds: 4,
    bathrooms: 1,

    haveBreakfast: true,
    haveDesk: false,
    haveFeedingChair: true,
    haveCrib: true,
    haveTV: false,
    haveShampoo: true
  },
  {
    gallery: [
      'room-6.webp',
      'room-12.webp',
      'room-1.webp',
      'room-9.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 430,
      good: 130,
      satisfactory: 30,
      poor: 12
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 8070,
    roomNumber: 357,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 27),
      new Date(2021, 11, 28),
      new Date(2021, 11, 29),
      new Date(2021, 11, 30),
      new Date(2021, 11, 31),
      new Date(2022, 0, 1),
      new Date(2022, 0, 2),
      new Date(2022, 0, 3),
      new Date(2022, 0, 4),
      new Date(2022, 0, 5),
      new Date(2022, 0, 6),
    ],
    maxGuests: 3,
    discount: 1233,
    serviceFee: 0,
    additionalServicesFee: 120,
    maySmoking: false,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: true,
    assistantForDisabled: false,

    bedrooms: 2,
    beds: 3,
    bathrooms: 1,

    haveBreakfast: false,
    haveDesk: false,
    haveFeedingChair: false,
    haveCrib: true,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-4.webp',
      'room-1.webp',
      'room-11.webp',
      'room-8.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 360,
      good: 214,
      satisfactory: 22,
      poor: 8
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 7300,
    roomNumber: 592,
    isLux: true,
    bookedDays: [
      new Date(2021, 11, 12),
      new Date(2021, 11, 13),
      new Date(2021, 11, 14),
      new Date(2021, 11, 15),
    ],
    maxGuests: 8,
    discount: 270,
    serviceFee: 0,
    additionalServicesFee: 100,
    maySmoking: false,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: true,
    assistantForDisabled: true,

    bedrooms: 4,
    beds: 8,
    bathrooms: 3,

    haveBreakfast: true,
    haveDesk: false,
    haveFeedingChair: true,
    haveCrib: true,
    haveTV: false,
    haveShampoo: true
  },
  {
    gallery: [
      'room-3.webp',
      'room-8.webp',
      'room-1.webp',
      'room-12.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 438,
      good: 450,
      satisfactory: 59,
      poor: 16
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 7490,
    roomNumber: 900,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 6),
      new Date(2021, 11, 7),
      new Date(2021, 11, 8),
      new Date(2021, 11, 9),
      new Date(2021, 11, 10),
      new Date(2021, 11, 11),
      new Date(2021, 11, 12),
    ],
    maxGuests: 5,
    discount: 1300,
    serviceFee: 340,
    additionalServicesFee: 150,
    maySmoking: false,
    mayWithPets: true,
    mayInviteGuests: false,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 3,
    beds: 5,
    bathrooms: 1,

    haveBreakfast: false,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: false,
    haveShampoo: false
  },
  {
    gallery: [
      'room-6.webp',
      'room-2.webp',
      'room-10.webp',
      'room-1.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 341,
      good: 240,
      satisfactory: 54,
      poor: 25
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 3500,
    roomNumber: 259,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 21),
      new Date(2021, 11, 22),
      new Date(2021, 11, 23),
      new Date(2021, 11, 25),
      new Date(2021, 11, 26),
    ],
    maxGuests: 2,
    discount: 150,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: true,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: false,

    bedrooms: 1,
    beds: 2,
    bathrooms: 1,

    haveBreakfast: false,
    haveDesk: false,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: true,
    haveShampoo: false
  },
  {
    gallery: [
      'room-5.webp',
      'room-9.webp',
      'room-11.webp',
      'room-3.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 30,
      good: 150,
      satisfactory: 22,
      poor: 5
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 9900,
    roomNumber: 386,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 5),
      new Date(2021, 11, 6),
      new Date(2021, 11, 7),
      new Date(2021, 11, 12),
      new Date(2021, 11, 13),
      new Date(2021, 11, 14),
      new Date(2021, 11, 15),
    ],
    maxGuests: 4,
    discount: 2300,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 3,
    beds: 3,
    bathrooms: 1,

    haveBreakfast: false,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: true,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-5.webp',
      'room-8.webp',
      'room-1.webp',
      'room-12.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 230,
      good: 480,
      satisfactory: 59,
      poor: 3
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 2600,
    roomNumber: 138,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 9),
      new Date(2021, 11, 10),
      new Date(2021, 11, 11),
      new Date(2021, 11, 12),
    ],
    maxGuests: 3,
    discount: 0,
    serviceFee: 0,
    additionalServicesFee: 0,
    maySmoking: false,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 2,
    beds: 2,
    bathrooms: 1,

    haveBreakfast: false,
    haveDesk: false,
    haveFeedingChair: false,
    haveCrib: false,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-5.webp',
      'room-2.webp',
      'room-3.webp',
      'room-9.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 23,
      good: 23,
      satisfactory: 30,
      poor: 0
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 4680,
    roomNumber: 712,
    isLux: true,
    bookedDays: [
      new Date(2021, 11, 27),
      new Date(2021, 11, 29),
      new Date(2021, 11, 30),
      new Date(2021, 11, 31),

    ],
    maxGuests: 4,
    discount: 400,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 2,
    beds: 4,
    bathrooms: 1,

    haveBreakfast: true,
    haveDesk: false,
    haveFeedingChair: true,
    haveCrib: true,
    haveTV: true,
    haveShampoo: false
  },
  {
    gallery: [
      'room-4.webp',
      'room-9.webp',
      'room-1.webp',
      'room-12.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 130,
      good: 50,
      satisfactory: 10,
      poor: 2
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 3000,
    roomNumber: 671,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 15),
      new Date(2021, 11, 16),
      new Date(2021, 11, 17),
      new Date(2021, 11, 18),
      new Date(2021, 11, 19),
      new Date(2021, 11, 20),
    ],
    maxGuests: 5,
    discount: 0,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: false,

    wideСorridor: true,
    assistantForDisabled: true,

    bedrooms: 3,
    beds: 5,
    bathrooms: 2,

    haveBreakfast: false,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-1.webp',
      'room-8.webp',
      'room-4.webp',
      'room-9.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 532,
      good: 359,
      satisfactory: 68,
      poor: 22
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 6730,
    roomNumber: 123,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 13),
      new Date(2021, 11, 14),
      new Date(2021, 11, 15),
      new Date(2021, 11, 16),
      new Date(2021, 11, 17),
      new Date(2021, 11, 18),
      new Date(2021, 11, 19),
    ],
    maxGuests: 7,
    discount: 1380,
    serviceFee: 0,
    additionalServicesFee: 200,
    maySmoking: true,
    mayWithPets: true,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: false,

    bedrooms: 4,
    beds: 5,
    bathrooms: 3,

    haveBreakfast: false,
    haveDesk: true,
    haveFeedingChair: false,
    haveCrib: false,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-6.webp',
      'room-3.webp',
      'room-8.webp',
      'room-11.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 132,
      good: 300,
      satisfactory: 589,
      poor: 5
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 7690,
    roomNumber: 346,
    isLux: false,
    bookedDays: [
      new Date(2021, 0, 9),
      new Date(2021, 0, 10),
      new Date(2021, 0, 11),
      new Date(2021, 0, 12),
      new Date(2021, 0, 13),
      new Date(2021, 0, 14),
      new Date(2021, 0, 15),
    ],
    maxGuests: 6,
    discount: 0,
    serviceFee: 0,
    additionalServicesFee: 200,
    maySmoking: false,
    mayWithPets: false,
    mayInviteGuests: false,

    wideСorridor: true,
    assistantForDisabled: false,

    bedrooms: 6,
    beds: 6,
    bathrooms: 4,

    haveBreakfast: false,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-5.webp',
      'room-1.webp',
      'room-12.webp',
      'room-7.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 50,
      good: 34,
      satisfactory: 88,
      poor: 12
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 5300,
    roomNumber: 719,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 18),
      new Date(2021, 11, 19),
      new Date(2021, 11, 20),
      new Date(2021, 11, 21),
      new Date(2021, 11, 22),
      new Date(2021, 11, 23),
    ],
    maxGuests: 3,
    discount: 900,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: false,
    mayWithPets: true,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 2,
    beds: 2,
    bathrooms: 1,

    haveBreakfast: true,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: true,
    haveShampoo: false
  },
  {
    gallery: [
      'room-3.webp',
      'room-1.webp',
      'room-8.webp',
      'room-5.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 250,
      good: 430,
      satisfactory: 340,
      poor: 120
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 12000,
    roomNumber: 899,
    isLux: true,
    bookedDays: [
      new Date(2021, 11, 12),
      new Date(2021, 11, 13),
      new Date(2021, 11, 14),
      new Date(2021, 11, 20),
      new Date(2021, 11, 21),
      new Date(2021, 11, 22),
      new Date(2021, 11, 23),
    ],
    maxGuests: 7,
    discount: 1600,
    serviceFee: 100,
    additionalServicesFee: 150,
    maySmoking: true,
    mayWithPets: true,
    mayInviteGuests: true,

    wideСorridor: true,
    assistantForDisabled: true,

    bedrooms: 5,
    beds: 5,
    bathrooms: 3,

    haveBreakfast: true,
    haveDesk: false,
    haveFeedingChair: false,
    haveCrib: true,
    haveTV: true,
    haveShampoo: false
  },
  {
    gallery: [
      'room-12.webp',
      'room-4.webp',
      'room-8.webp',
      'room-1.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 216,
      good: 32,
      satisfactory: 70,
      poor: 2
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 15000,
    roomNumber: 482,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 5),
      new Date(2021, 11, 6),
      new Date(2021, 11, 7),
      new Date(2021, 11, 8),
      new Date(2021, 11, 17),
      new Date(2021, 11, 18),
      new Date(2021, 11, 19),
    ],
    maxGuests: 4,
    discount: 1200,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 4,
    beds: 4,
    bathrooms: 3,

    haveBreakfast: true,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: true,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-3.webp',
      'room-12.webp',
      'room-8.webp',
      'room-9.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 340,
      good: 420,
      satisfactory: 220,
      poor: 25
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 4000,
    roomNumber: 312,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 5),
      new Date(2021, 11, 6),
      new Date(2021, 11, 7),
      new Date(2021, 11, 8),
      new Date(2021, 11, 9),
      new Date(2021, 11, 17),
      new Date(2021, 11, 18),
    ],
    maxGuests: 4,
    discount: 0,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: false,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 2,
    beds: 2,
    bathrooms: 1,

    haveBreakfast: true,
    haveDesk: true,
    haveFeedingChair: false,
    haveCrib: true,
    haveTV: false,
    haveShampoo: true
  },
  {
    gallery: [
      'room-1.webp',
      'room-7.webp',
      'room-3.webp',
      'room-9.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 65,
      good: 43,
      satisfactory: 12,
      poor: 1
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 18000,
    roomNumber: 840,
    isLux: true,
    bookedDays: [
      new Date(2021, 11, 21),
      new Date(2021, 11, 22),
      new Date(2021, 11, 23),
      new Date(2021, 11, 24),
    ],
    maxGuests: 6,
    discount: 3500,
    serviceFee: 0,
    additionalServicesFee: 600,
    maySmoking: true,
    mayWithPets: true,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: false,

    bedrooms: 5,
    beds: 5,
    bathrooms: 3,

    haveBreakfast: false,
    haveDesk: false,
    haveFeedingChair: true,
    haveCrib: true,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-6.webp',
      'room-2.webp',
      'room-7.webp',
      'room-12.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 54,
      good: 7,
      satisfactory: 3,
      poor: 7
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 7800,
    roomNumber: 269,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 5),
      new Date(2021, 11, 6),
      new Date(2021, 11, 7),
      new Date(2021, 11, 8),
      new Date(2021, 11, 9),
      new Date(2021, 11, 19),
      new Date(2021, 11, 20),
      new Date(2021, 11, 21),
      new Date(2021, 11, 22),
    ],
    maxGuests: 6,
    discount: 3765,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 6,
    beds: 6,
    bathrooms: 3,

    haveBreakfast: true,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: true,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-8.webp',
      'room-3.webp',
      'room-1.webp',
      'room-12.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 120,
      good: 280,
      satisfactory: 22,
      poor: 5
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 11000,
    roomNumber: 174,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 16),
      new Date(2021, 11, 17),
      new Date(2021, 11, 18),
      new Date(2021, 11, 19),
    ],
    maxGuests: 7,
    discount: 2000,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: true,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: false,

    bedrooms: 4,
    beds: 6,
    bathrooms: 3,

    haveBreakfast: true,
    haveDesk: true,
    haveFeedingChair: false,
    haveCrib: true,
    haveTV: true,
    haveShampoo: false
  },
  {
    gallery: [
      'room-6.webp',
      'room-9.webp',
      'room-3.webp',
      'room-2.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 65,
      good: 43,
      satisfactory: 22,
      poor: 5
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 4670,
    roomNumber: 824,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 11),
      new Date(2021, 11, 12),
      new Date(2021, 11, 13),
      new Date(2021, 11, 14),
      new Date(2021, 0, 8),
      new Date(2021, 0, 9),
      new Date(2021, 0, 10),
    ],
    maxGuests: 6,
    discount: 320,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 4,
    beds: 6,
    bathrooms: 2,

    haveBreakfast: true,
    haveDesk: false,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: false,
    haveShampoo: true
  },
  {
    gallery: [
      'room-11.webp',
      'room-4.webp',
      'room-8.webp',
      'room-5.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 432,
      good: 430,
      satisfactory: 130,
      poor: 22
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 7770,
    roomNumber: 430,
    isLux: false,
    bookedDays: [],
    maxGuests: 2,
    discount: 0,
    serviceFee: 0,
    additionalServicesFee: 0,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: true,

    bedrooms: 2,
    beds: 2,
    bathrooms: 1,

    haveBreakfast: false,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: true,
    haveShampoo: true
  },
  {
    gallery: [
      'room-6.webp',
      'room-12.webp',
      'room-1.webp',
      'room-8.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 12,
      good: 23,
      satisfactory: 5,
      poor: 1
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 9900,
    roomNumber: 399,
    isLux: false,
    bookedDays: [
      new Date(2021, 11, 6),
      new Date(2021, 11, 7),
    ],
    maxGuests: 5,
    discount: 1200,
    serviceFee: 0,
    additionalServicesFee: 300,
    maySmoking: true,
    mayWithPets: false,
    mayInviteGuests: false,

    wideСorridor: true,
    assistantForDisabled: true,

    bedrooms: 4,
    beds: 5,
    bathrooms: 1,

    haveBreakfast: true,
    haveDesk: true,
    haveFeedingChair: true,
    haveCrib: false,
    haveTV: true,
    haveShampoo: false
  },
  {
    gallery: [
      'room-5.webp',
      'room-3.webp',
      'room-8.webp',
      'room-12.webp',
    ],
    information: [
      {
        description: "Шумопоглощающие стены",
        icon: "comfort-icon.svg",
        title: "Комфорт"
      },
      {
        description: "Окно в каждой из спален",
        icon: "convenience-icon.svg",
        title: "Удобство"
      },
      {
        description: "Номер оснащён камином",
        icon: "coziness-icon.svg",
        title: "Уют"
      }
    ],
    impressions: {
      perfect: 340,
      good: 210,
      satisfactory: 20,
      poor: 5
    },
    rules: [
      "Можно с питомцами",
      "Без вечеринок и мероприятий",
      "Время прибытия — после 13:00,а выезд до 12:00"
    ],
    cancellation: "Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.",
    price: 15700,
    roomNumber: 725,
    isLux: true,
    bookedDays: [
      new Date(2021, 11, 12),
      new Date(2021, 11, 13),
      new Date(2021, 11, 14),
      new Date(2021, 11, 18),
      new Date(2021, 11, 19),
      new Date(2021, 11, 20),
      new Date(2021, 11, 25),
      new Date(2021, 11, 26),
    ],
    maxGuests: 3,
    discount: 0,
    serviceFee: 0,
    additionalServicesFee: 0,
    maySmoking: false,
    mayWithPets: false,
    mayInviteGuests: true,

    wideСorridor: false,
    assistantForDisabled: false,

    bedrooms: 1,
    beds: 3,
    bathrooms: 1,

    haveBreakfast: true,
    haveDesk: true,
    haveFeedingChair: false,
    haveCrib: false,
    haveTV: true,
    haveShampoo: false
  },
]

const filters = {
  dates: [new Date(2021, 11, 10), new Date(2021, 11, 15)],
  guests: {
    adult: 2,
    child: 0,
    infants: 0
  },
  price: [5000, 15000],
  rules : {
    maySmoking: {
      text:'',
      checked: false
    },
    mayWithPets: {
      text:'string',
      checked: false
    },
    mayInviteGuests: {
      text:'string',
      checked: false
    },
  },
  availability: {
    wideСorridor: {
      title: 'string',
      text: 'string',
      checked: false
    },
    assistantForDisabled: {
      title: 'string',
      text: 'string',
      checked: false
    }
  },
  conveniences: {
    bedrooms: {
      text: 'string',
      value: 0,
      spellCases: ['string', 'string', 'string'],
    },
    beds: {
      text: 'string',
      value: 0,
      spellCases: ['string', 'string', 'string'],
    },
    bathrooms: {
      text: 'string',
      value: 0,
      spellCases: ['string', 'string', 'string'],
    },
  },
  additionalConvenience: {
    haveBreakfast: {
      checked: false,
      text: 'string'
    },
    haveDesk: {
      checked: false,
      text: 'string'
    },
    haveFeedingChair: {
      checked: false,
      text: 'string'
    },
    haveCrib: {
      checked: false,
      text: 'string'
    },
    haveTV: {
      checked: false,
      text: 'string'
    },
    haveShampoo: {
      checked: false,
      text: 'string'
    }
  }
}


const Index = (): ReactElement => (
  <Layout title="landing page" pageClass="landing">
    {
      console.log(firebaseAPI.signIn('dxcgfghcffgxjxfgxgffbx@mail.ru', 'lkjhgfdsa'))
    }
  </Layout>
);

export default Index;
