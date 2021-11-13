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
  slides: ['room1.png', 'room2.png', 'room3.png', 'room4.png'],
};

const props2: RoomCardProps = {
  infoSection: { roomNumber: 48, rating: 3, price: 8769, reviewsCount: 20 },
  slides: ['room5.png', 'room6.png', 'room7.png', 'room8.png'],
};

const props3: RoomCardProps = {
  infoSection: {
    roomNumber: 1,
    isLux: true,
    rating: 1,
    price: 100000,
    reviewsCount: 1000,
  },
  slides: ['room9.png', 'room10.png', 'room11.png', 'room12.png'],
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
