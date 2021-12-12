import { useDispatch, useSelector } from 'react-redux';

import RecalculateRating from 'src/utils/RecalculateRating';
import {
  updateRooms,
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
  const dispatch = useDispatch();

  dispatch(updateRooms());

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
                link={`/details/${room.roomID}`}
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
