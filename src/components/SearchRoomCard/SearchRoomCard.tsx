import Button from '../Button/Button';
import DateDropdown from '../DateDropdown/DateDropdown';
import DropdownGuests from '../DropdownGuests/DropdownGuests';
import styles from './SearchRoomCard.module.scss';

type DropdownGuestsProps = {
  placeholder: string;
  opened: boolean;
  value: {
    adult: number;
    child: number;
    infants: number;
  };
};

type DateDropdownType = {
  titles: [string] | [string, string];
  modifier: 'single' | 'double';
  initDate: [Date, Date] | [null, null];
};

type RoomRateCardState = {
  dateDropdown: DateDropdownType;
  guestsDropdown: DropdownGuestsProps;
};

const SearchRoomCard = ({
  dateDropdown,
  guestsDropdown,
}: RoomRateCardState): JSX.Element => {
  const searchRoomCard = (
    <div className={styles.searchRoomCard}>
      <h1 className={styles.title}>Найдём номера под ваши пожелания</h1>
      <form className={styles.form}>
        <div className={styles.formItem}>
          <DateDropdown {...dateDropdown} />
        </div>
        <div className={styles.formItem}>
          <h3 className={styles.formItemTitle}>гости</h3>
          <DropdownGuests {...guestsDropdown} />
        </div>
        <div className={styles.buttonContainer}>
          <Button type='submit' theme='filled' text='подобрать номер' />
        </div>
      </form>
    </div>
  );

  return searchRoomCard;
};

export default SearchRoomCard;
