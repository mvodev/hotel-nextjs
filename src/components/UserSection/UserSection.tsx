import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import UserSectionProps from './Types';
import styles from './UserSection.module.scss';

const UserSection = ({ user }: UserSectionProps): React.ReactElement => {
  const [screenWidth, setWidth] = useState(0);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, []);

  const PHONE_SCREEN_WIDTH = 950;
  const separatorItemClasses = `${styles.item} ${styles.itemThemeStretched}`;

  const entryButton =
    screenWidth <= PHONE_SCREEN_WIDTH ? (
      <Link href='/'>
        <a className={styles.link}>Войти</a>
      </Link>
    ) : (
      <Button link='/' theme='bordered' size='small' text='Войти' />
    );

  const registrationButton =
    screenWidth <= PHONE_SCREEN_WIDTH ? (
      <Link href='/'>
        <a className={styles.link}>Зарегистрироваться</a>
      </Link>
    ) : (
      <Button link='/' theme='filled' size='small' text='Зарегистрироваться' />
    );

  const userSection = user ? (
    <>
      <div className={separatorItemClasses}>
        <div className={styles.separator} />
      </div>
      <div className={styles.item}>
        <Link href='/'>
          <a className={styles.link}>{user}</a>
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className={styles.item}>{entryButton}</div>
      <div className={styles.item}>{registrationButton}</div>
    </>
  );

  return <div className={styles.userSection}>{userSection}</div>;
};

export default UserSection;
