import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Form } from 'react-final-form';
import getPosInSpellCasesArray from 'src/utils/Utils';
import DateDropdown from 'src/components/DateDropdown/DateDropdown';
import DropdownGuests from 'src/components/DropdownGuests/DropdownGuests';
import Button from 'src/components/Button/Button';

import styles from './TotalCostCard.module.sass';
import TypeTotalCostCardProps from './Types';
import { AppState } from 'src/redux/Store';
import { CHECK_BOOKING_BLOCKED, SET_IS_BOOKED } from 'src/redux/CurrentRoom/Types';

const TotalCostCard = (): JSX.Element => {
  const router = useRouter()
  const dispatch = useDispatch();
  const isBookingBlocked = useSelector((state: AppState) => state.CurrentRoom.isBookingBlocked);
  const isBooked = useSelector((state: AppState) => state.CurrentRoom.isBooked);
  const inBookingProcess = useSelector((state: AppState) => state.CurrentRoom.inBookingProcess);

  const dates = useSelector((state: AppState) => state.filters.dates);

  const roomNumber = useSelector((state: AppState) => state.CurrentRoom.roomNumber);
  const isLuxury = useSelector((state: AppState) => state.CurrentRoom.isLux);
  const costPerDay = useSelector((state: AppState) => state.CurrentRoom.price);
  const discount = useSelector((state: AppState) => state.CurrentRoom.discount);
  const serviceFee = useSelector((state: AppState) => state.CurrentRoom.serviceFee);
  const fee = useSelector((state: AppState) => state.CurrentRoom.additionalServicesFee);
  const bookedDays = useSelector((state: AppState) => state.CurrentRoom.bookedDays);

  dispatch({ type: CHECK_BOOKING_BLOCKED })

  const DAY = 24 * 60 * 60 * 1000;
  const nDays = (dates[0] !== null)
    ? Math.ceil((dates[1] - dates[0]) / DAY)
    : 0

  const preTotal = costPerDay * nDays;

  const spells = ['сутки', 'суток', 'суток'];

  const formatInRubles = (value: number) =>
    new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(value)
      .replace(/\s(?!\d)/, '');

  if (isBooked) {
    dispatch({ type: SET_IS_BOOKED, payload: false })
    router.push('/myRooms');
  }

  const handleFormSubmit = () => {
    dispatch({ type: 'ADD_BOOK' })
  }

  return (
    <Form onSubmit={handleFormSubmit}
      render={({ handleSubmit }) => (
        <form className={styles.totalCostCard} onSubmit={handleSubmit}>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h1
                className={[
                  styles.roomNumber,
                  isLuxury ? styles.roomNumberDeluxe : '',
                ].join(' ')}
              >
                {roomNumber}
              </h1>
              <span className={styles.costPerDay}>
                {formatInRubles(costPerDay)}
              </span>
            </div>
            <div className={styles.dateDropdownWrapper}>
              <DateDropdown
                titles={['прибытие', 'выезд']}
                modifier="double"
                from='bookingCard'
                disabledDates={bookedDays}
              />
            </div>
            <div className={styles.dropdownGuestsWrapper}>
              <h3 className={styles.dropdownGuestsTitle}>гости</h3>
              <DropdownGuests
                placeholder="Сколько гостей"
                opened={false}
                from='bookingCard'
              />
            </div>
            <div className={styles.costTable}>
              <div className={styles.costTableServiceDescription}>
                <span className={styles.costTableCostPerDay}>
                  {formatInRubles(costPerDay)}
                </span>
                {' x '}
                <span className={styles.costTableNDays}>
                  {nDays} {spells[getPosInSpellCasesArray(nDays)]}
                </span>
              </div>
              <div className={styles.costTableInfo} title="info" />
              <div className={styles.costTableCost}>{formatInRubles(preTotal)}</div>
              <div className={styles.costTableServiceDescription}>
                {`Сбор за услуги: скидка ${formatInRubles(discount)}`}
              </div>
              <div className={styles.costTableInfo} title="info" />
              <div className={styles.costTableCost}>{serviceFee}₽</div>
              <div className={styles.costTableServiceDescription}>
                Сбор за дополнительные {'\n'} услуги
              </div>
              <div className={styles.costTableInfo} title="info" />
              <div className={styles.costTableCost}>{formatInRubles(fee)}</div>
            </div>
            <div className={styles.total}>
              <span className={styles.totalCaption}>Итого</span>
              <div className={styles.totalDashedLine} />
              <span className={styles.totalCost}>
                {formatInRubles(preTotal - discount + fee + serviceFee)}
              </span>
            </div>
            <Button 
              text="ЗАБРОНИРОВАТЬ" 
              type="submit" 
              theme="filled" 
              isDisabled={isBookingBlocked || inBookingProcess} 
            />
          </div>
        </form>
      )}
    />
  );
};

export default TotalCostCard;
