import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import RecalculateRating from 'src/utils/RecalculateRating';
import {
  selectBookedRooms,
  selectFetching,
} from 'src/redux/Booking/BookingSlice';
import Layout from 'src/components/Layout';
import RoomCard from 'src/components/RoomCard/RoomCard';
import Spin from 'src/components/Spin/Spin';
import styles from '@styles/pages/myRooms.module.sass';

const MyRooms = (): JSX.Element => {
  const rooms = useSelector(selectBookedRooms);
  const isFetching = useSelector(selectFetching);
  const isEmpty = rooms.length === 0;
  const isTransition = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const handleBeforeRouteChange = (url: string) => {
      if (!isTransition.current) {
        router.events.emit('routeChangeError');
        console.log(url.replace(/\/.*\//, ''));
        throw 'Abort route change. Please ignore this error.';
      }
    };

    router.events.on('routeChangeStart', handleBeforeRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleBeforeRouteChange);
    };
  });

  return (
    <Layout title="my rooms" pageClass={styles.myRooms}>
      <style jsx global>{`
        #__next {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
      `}</style>

      <article className={styles.content}>
        <h1 className={styles.title}>
          {isEmpty ? 'Ничего нет :(' : 'Ваши номера'}
        </h1>
        {isFetching ? (
          <div className={styles.spinContainer}>
            <Spin />
          </div>
        ) : (
          <div className={styles.container}>
            {rooms.map((room) => (
              <RoomCard
                key={room.roomID}
                id={room.roomID}
                slides={room.gallery}
                infoSection={{
                  roomNumber: room.roomNumber,
                  isLux: room.isLux,
                  rating: RecalculateRating(room.impressions),
                  price: room.price,
                  reviewsCount: Object.values(room.impressions).reduce(
                    (acc, v) => acc + v
                  ),
                }}
              />
            ))}
          </div>
        )}
      </article>
    </Layout>
  );
};

export default MyRooms;
