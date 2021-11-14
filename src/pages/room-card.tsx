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
  slides: ['room1.webp', 'room2.webp', 'room3.webp', 'room4.webp'],
};

const props2: RoomCardProps = {
  infoSection: { roomNumber: 48, rating: 3, price: 8769, reviewsCount: 22 },
  slides: ['room5.webp', 'room6.webp', 'room7.webp', 'room8.webp'],
};

const props3: RoomCardProps = {
  infoSection: {
    roomNumber: 1,
    isLux: true,
    rating: 1,
    price: 100000,
    reviewsCount: 101,
  },
  slides: ['room9.webp', 'room10.webp', 'room11.webp', 'room12.webp'],
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
