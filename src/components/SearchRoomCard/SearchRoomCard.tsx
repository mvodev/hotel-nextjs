import { Form } from 'react-final-form'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import DropdownGuests from 'src/components/DropdownGuests/DropdownGuests';
import {
  submit,
  selectReadyDate,
  switchToUnreadyDate,
} from 'src/redux/Slices/Filters/FiltersSlice';

import Button from '../Button/Button';
import DateDropdown from '../DateDropdown/DateDropdown';
import styles from './SearchRoomCard.module.scss';

const SearchRoomCard = (): JSX.Element => {
  const [isDisabled, toggleDisable] = useState(false);
  const isReadyDate = useSelector(selectReadyDate);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isReadyDate) {
      router.push('/search');
    }

    return () => {
      dispatch(switchToUnreadyDate()); 
    };
  })

  return (
    <Form onSubmit={() => {
      dispatch(submit());
      toggleDisable(true);
    }}>
      {({ handleSubmit }) => (
        <div className={styles.searchRoomCard}>
          <h1 className={styles.title}>Найдём номера под ваши пожелания</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formItem}>
              <DateDropdown />
            </div>
            <div className={styles.formItem}>
              <h3 className={styles.formItemTitle}>гости</h3>
              <DropdownGuests />
            </div>
            <div className={styles.buttonContainer}>
              <Button 
                type='submit' 
                theme='filled' 
                text='подобрать номер' 
                isDisabled={isDisabled}
              />
            </div>
          </form>
        </div>
      )}
    </Form>
  )
};

export default SearchRoomCard;
