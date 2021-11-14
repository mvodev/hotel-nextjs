import type { ReactElement } from 'react';
import RoomCard from 'src/components/RoomCard/RoomCard';
import RoomCardProps from 'src/components/RoomCard/Types';

const props1: RoomCardProps = {
  infoSection: {
    roomNumber: 888,
    isLux: true,
    rating: 5,
    price: 9990,
    reviewsCount: 145,
  },
  slides: ['room-1.webp', 'room-2.webp', 'room-3.webp', 'room-4.webp'],
};

const props2: RoomCardProps = {
  infoSection: { roomNumber: 48, rating: 3, price: 8769, reviewsCount: 22 },
  slides: ['room-5.webp', 'room-6.webp', 'room-7.webp', 'room-8.webp'],
};

const props3: RoomCardProps = {
  infoSection: {
    roomNumber: 1,
    isLux: true,
    rating: 1,
    price: 100000,
    reviewsCount: 101,
  },
  slides: ['room-9.webp', 'room-10.webp', 'room-11.webp', 'room-12.webp'],
};

const roomCard = (): ReactElement => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: '50px',
      flexWrap: 'wrap',
    }}
  >
    <div
      style={{
        padding: '10px',
        boxSizing: 'content-box',
        width: '100%',
        maxWidth: '270px',
      }}
    >
      <RoomCard {...props1} />
    </div>
    <div
      style={{
        padding: '10px',
        boxSizing: 'content-box',
        width: '100%',
        maxWidth: '270px',
      }}
    >
      <RoomCard {...props2} />
    </div>
    <div
      style={{
        padding: '10px',
        boxSizing: 'content-box',
        width: '100%',
        maxWidth: '270px',
      }}
    >
      <RoomCard {...props3} />
    </div>
  </div>
);

export default roomCard;
