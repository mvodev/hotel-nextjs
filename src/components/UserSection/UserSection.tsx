import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOG_OUT } from 'src/redux/Authentication/Types';
import { AppState } from 'src/redux/Store';
import NavbarItem from '../NavbarItem/NavbarItem';
import Button from '../Button/Button';
import styles from './UserSection.module.scss';

const UserSection = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(
    (state: AppState) => state.Authentication
  );

  const [screenWidth, setWidth] = useState(0);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, []);

  const handleExitClick = (): void => {
    dispatch({ type: USER_LOG_OUT });
  };

  const PHONE_SCREEN_WIDTH = 950;
  const separatorItemClasses = `${styles.item} ${styles.itemThemeStretched}`;

  const entryButton =
    screenWidth <= PHONE_SCREEN_WIDTH ? (
      <Link href="/signIn">
        <a className={styles.link}>Войти</a>
      </Link>
    ) : (
      <Button link="/signIn" theme="bordered" size="small" text="Войти" />
    );

  const registrationButton =
    screenWidth <= PHONE_SCREEN_WIDTH ? (
      <Link href="/registration">
        <a className={styles.link}>Зарегистрироваться</a>
      </Link>
    ) : (
      <Button
        link="/registration"
        theme="filled"
        size="small"
        text="Зарегистрироваться"
      />
    );

  const userSection = isAuthenticated ? (
    <>
      <div className={separatorItemClasses}>
        <div className={styles.separator} />
      </div>
      <div className={styles.item}>
        <NavbarItem
          item={{
            id: 1,
            item: `${user.name} ${user.surname}`,
            link: '/',
            hiddenItems: [
              { id: 1, item: 'Выход', link: '/', callback: handleExitClick },
            ],
          }}
        />
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
