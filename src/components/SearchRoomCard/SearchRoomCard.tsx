import { Form } from 'react-final-form'

import DropdownGuests from 'src/components/DropdownGuests/DropdownGuests';

import Button from '../Button/Button';
import DateDropdown from '../DateDropdown/DateDropdown';
import DateDropdownType from '../DateDropdown/Types';
import styles from './SearchRoomCard.module.scss';

type RoomRateCardState = {
  dateDropdown: DateDropdownType;
};

const SearchRoomCard = ({ dateDropdown }: RoomRateCardState): JSX.Element => (
  <Form onSubmit={() => console.log('hihe')}>
    {({ handleSubmit }) => (
      <div className={styles.searchRoomCard}>
        <h1 className={styles.title}>Найдём номера под ваши пожелания</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formItem}>
            <DateDropdown {...dateDropdown} />
          </div>
          <div className={styles.formItem}>
            <h3 className={styles.formItemTitle}>гости</h3>
            <DropdownGuests />
          </div>
          <div className={styles.buttonContainer}>
            <Button type='submit' theme='filled' text='подобрать номер' />
          </div>
        </form>
      </div>
    )}
  </Form>
);

export default SearchRoomCard;
