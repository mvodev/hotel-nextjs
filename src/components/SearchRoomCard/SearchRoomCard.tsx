import Button from '../Button/Button';
import DateDropdown from '../DateDropdown/DateDropdown';
import DateDropdownType from '../DateDropdown/Types';
import styles from './SearchRoomCard.module.scss';

type RoomRateCardState = {
  dateDropdown: DateDropdownType;
  guestsDropdown: null;
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
        {/* <div className={styles.formItem}>
          <h3 className={styles.formItemTitle}>гости</h3>
          <DropdownGuests {...guestsDropdown} />
        </div> */}
        <div className={styles.buttonContainer}>
          <Button type='submit' theme='filled' text='подобрать номер' />
        </div>
      </form>
    </div>
  );

  return searchRoomCard;
};

export default SearchRoomCard;
