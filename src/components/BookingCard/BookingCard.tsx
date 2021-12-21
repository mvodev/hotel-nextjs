import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setActiveBooking,
  setActiveRoom,
  selectBookingList,
  selectActiveBookingSize,
  selectActiveRoomSize,
  selectBookedRooms,
  selectFetching,
  selectActiveBooking,
  selectActiveRoom,
} from 'src/redux/Booking/BookingSlice';
import type { BookingList } from 'src/redux/Booking/Types';
import Dropdown from 'src/components/Dropdown/Dropdown';
import ContextMenu from 'src/components/ContextMenu/ContextMenu';
import Button from 'src/components/Button/Button';

import style from './BookingCard.module.sass';

const BookingCard = (): JSX.Element => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectFetching);
  const rooms = useSelector(selectBookedRooms);
  const activeRoomSize = useSelector(selectActiveRoomSize);
  const booking = useSelector(selectBookingList);
  const activeBookingSize = useSelector(selectActiveBookingSize);
  const activeRoom = useSelector(selectActiveRoom) || rooms[0];
  const [isOpen, toggleOpenStatus] = useState(false);
  const activeBooking = useSelector(selectActiveBooking);
  // const [activeBooking, changeActiveBooking] = useState<BookingList | null>(
  //   null
  // );
  const filterByNumber = (b: BookingList) => b.roomID === activeRoom?.roomID;
  const bookingByNumber = booking.filter(filterByNumber);
  const activeBookingSizeByNumber = booking
    .slice(0, activeBookingSize)
    .filter(filterByNumber).length;

  useEffect(() => {
    if (!rooms.find((r) => r.roomID === activeRoom?.roomID)) {
      dispatch(setActiveRoom(rooms[0]));
    }

    if (isFetching) {
      dispatch(setActiveBooking(null));
    }

    const handleWindowClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(`.${style.dropdownContainer}`)) {
        return;
      }
      toggleOpenStatus(false);
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [activeRoom, rooms, isFetching, dispatch]);

  return (
    <article className={style.bookingCard}>
      <h2 className={style.title}>Ваше бронирование</h2>
      <div className={style.container}>
        <h3 className={style.subTitle}>Номер комнаты</h3>
        <div className={style.dropdownContainer}>
          <Dropdown
            sign={String(activeRoom?.roomNumber)}
            isOpen={isOpen}
            toggleOpenStatus={() => toggleOpenStatus(!isOpen)}
            childs={rooms.map((r, idx) => (
              <button
                type="button"
                key={r.roomNumber}
                className={[
                  style.dropdownItem,
                  idx < activeRoomSize ? style.dropdownItemActive : '',
                ].join(' ')}
                onClick={() => {
                  if (r.roomID !== activeBooking?.roomID) {
                    dispatch(setActiveBooking(null));
                  }
                  toggleOpenStatus(false);
                  dispatch(setActiveRoom(r));
                }}
              >
                {r.roomNumber}
              </button>
            ))}
          />
        </div>
      </div>
      <div className={style.container}>
        <h3 className={style.subTitle}>Дата бронирования</h3>
        <div className={style.bookingList}>
          <ContextMenu
            childs={bookingByNumber.map((b, idx) => (
              <button
                key={b.id}
                type="button"
                className={[
                  style.bookingButton,
                  b.id === activeBooking?.id ? style.bookingButtonSelected : '',
                ].join(' ')}
                onClick={() => dispatch(setActiveBooking(b))}
                disabled={idx >= activeBookingSizeByNumber}
              >
                {[b.start, b.end]
                  .map((d) => new Date(d).toLocaleDateString('ru-RU'))
                  .join(' \u{2014} ')}
              </button>
            ))}
          />
        </div>
      </div>
      <Button
        text="отменить бронирование"
        theme="filled"
        isDisabled={!activeBooking || isFetching}
        onClick={() => {
          dispatch({ type: 'CANCEL_BOOKING', payload: activeBooking })
        }}
      />
    </article>
  );
};

export default BookingCard;
