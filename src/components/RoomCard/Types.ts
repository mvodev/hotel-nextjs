type RoomCardProps = {
  roomNumber: number;
  isLux?: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
  price: number;
  reviewsCount: number;
  slides: string[];
};

export default RoomCardProps;
