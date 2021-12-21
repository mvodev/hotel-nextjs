import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import RecalculateRating from 'src/utils/RecalculateRating';
import {
  setActiveBooking,
  setActiveRoom,
  selectActiveRoomSize,
  selectBookedRooms,
  selectFetching,
  selectActiveRoom,
} from 'src/redux/Booking/BookingSlice';
import type { BookedRoom } from 'src/redux/Booking/Types';
import Layout from 'src/components/Layout';
import RoomCard from 'src/components/RoomCard/RoomCard';
import ContextMenu from 'src/components/ContextMenu/ContextMenu';
import BookingCard from 'src/components/BookingCard/BookingCard';
import Spin from 'src/components/Spin/Spin';
import roomCardStyles from '@components/RoomCard/RoomCard.module.scss';
import style from '@styles/pages/myRooms.module.sass';

const MyRooms = (): JSX.Element => {
  const dispatch = useDispatch();
  const main = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const [isMenuShown, toggleMenuVisibility] = useState(false);
  const [menuCoords, setMenuCoords] = useState([0, 0]);
  const [isCardShown, toggleCardVisibility] = useState(false);
  const rooms = useSelector(selectBookedRooms);
  const activeRoomSize = useSelector(selectActiveRoomSize);
  const activeRooms = rooms.slice(0, activeRoomSize);
  const unactiveRooms = rooms.slice(activeRoomSize);
  const isFetching = useSelector(selectFetching);
  const activeRoom = useSelector(selectActiveRoom) || rooms[0];
  const activeID = useRef('');
  const isTransition = useRef(false);
  const router = useRouter();
  const getRoomCard = (room: BookedRoom) => (
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
          (acc, v) => acc + (v || 0),
          0
        ),
      }}
    />
  );

  useEffect(() => {
    const handleBeforeRouteChange = (url: string) => {
      if (url.match(/^\/room\/.+$/) && !isTransition.current) {
        toggleMenuVisibility(true);
        activeID.current = url.replace(/\/.*\//, '');
        dispatch(setActiveBooking(null));
        router.events.emit('routeChangeError');
        throw 'Abort route change. Please ignore this error.';
      }
    };

    const handleWindowClick = (e: MouseEvent) => {
      if (isFetching) {
        return;
      }
      if (
        isCardShown &&
        !(e.target as HTMLElement).closest(`.${style.cardContainer}`)
      ) {
        toggleCardVisibility(false);
      }
      if (
        !(e.target instanceof HTMLButtonElement) &&
        (e.target as HTMLElement).closest(`.${roomCardStyles.roomCard}`)
      ) {
        setMenuCoords([
          e.clientX === 0
            ? menuCoords[0]
            : Math.max(
                document.documentElement.clientWidth -
                  e.clientX -
                  parseFloat(
                    getComputedStyle(menu.current as HTMLElement).width
                  ),
                0
              ),
          e.clientY === 0
            ? menuCoords[1]
            : Math.max(
                document.documentElement.clientHeight -
                  e.clientY -
                  (menu.current?.getBoundingClientRect().height ?? 0),
                0
              ),
        ]);
        return;
      }
      if (isMenuShown) {
        toggleMenuVisibility(false);
      }
    };

    router.events.on('routeChangeStart', handleBeforeRouteChange);

    window.addEventListener('click', handleWindowClick);

    window.addEventListener('load', () =>
      setMenuCoords([0, document.documentElement.clientHeight / 2])
    );

    return () => {
      router.events.off('routeChangeStart', handleBeforeRouteChange);
      window.removeEventListener('click', handleWindowClick);
    };
  });

  return (
    <Layout title="my rooms" pageClass={style.myRooms}>
      <style jsx global>{`
        #__next {
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: ${isFetching ? 'hidden' : 'initial'};
        }
      `}</style>

      <article className={style.content} ref={main}>
        {rooms.length === 0 && <h1 className={style.title}>Ничего нет :(</h1>}
        {isFetching && (
          <div className={style.modalSpin}>
            <Spin />
          </div>
        )}
        <div
          className={style.contextMenuBox}
          ref={menu}
          style={{
            display: `${isMenuShown ? 'initial' : 'none'}`,
            right: `${menuCoords[0]}px`,
            bottom: `${menuCoords[1]}px`,
          }}
        >
          <ContextMenu
            childs={[
              <button
                key="button"
                type="button"
                className={style.contextMenuItem}
                onClick={() => {
                  if (activeID.current !== activeRoom.roomID) {
                    dispatch(
                      setActiveRoom(
                        rooms.find((r) => r.roomID === activeID.current)
                      )
                    );
                  }
                  toggleCardVisibility(true);
                  toggleMenuVisibility(false);
                  window.scrollTo(0, 0);
                }}
              >
                Список бронирований
              </button>,
              <button
                type="button"
                className={style.contextMenuItem}
                onClick={() => {
                  isTransition.current = true;
                  router.push(`/room/${activeRoom.roomID}`);
                }}
              >
                Детали номера
              </button>,
            ]}
          />
        </div>
        <div
          className={[
            style.cardContainer,
            (isCardShown && rooms.length !== 0) ? style.cardContainerVisible : '',
          ].join(' ')}
        >
          <BookingCard />
        </div>
        {activeRooms.length !== 0 && (
          <section className={style.roomsSection}>
            <h2 className={style.title}>Забронированные номера</h2>
            <div className={style.container}>
              {activeRooms.map(getRoomCard)}
            </div>
          </section>
        )}
        {unactiveRooms.length !== 0 && (
          <section className={style.roomsSection}>
            <h2 className={style.title}>История бронирований</h2>
            <div className={style.container}>
              {unactiveRooms.map(getRoomCard)}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default MyRooms;
