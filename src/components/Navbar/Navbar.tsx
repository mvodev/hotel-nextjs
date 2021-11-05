import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './Navbar.module.scss';
import { NavbarProps, NavbarListItem } from './Types';

const PHONE_SCREEN_WIDTH = 950;

const Navbar = ({ items, user, navbarIsOpened }: NavbarProps): React.ReactElement => {
  const [screenWidth, setWidth] = useState(0);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, []);

  const itemsCollections = items !== undefined ? items : [];
  const itemsElements = itemsCollections.map(
    (firstLevelItem: NavbarListItem) => {
      const hiddenItems = firstLevelItem.hiddenItems ? firstLevelItem.hiddenItems : [];
      const arrow =  hiddenItems.length > 0 ? (<span className={styles.arrow}>expand_more</span>) : null;

      const secondLevelItems = hiddenItems.map((hiddenItem) => {
        const item = (
          <li key={hiddenItem.id} className={styles.item}>
            <Link href={hiddenItem.link}>
              <a className={styles.link}>{hiddenItem.item}</a>
            </Link>
          </li>
        );

        return item;
      });

      const hiddenMenu =
        secondLevelItems.length > 0 ? (<ul className={styles.hiddenMenu}>{secondLevelItems}</ul>) : null;

      return (
        <li key={firstLevelItem.id} className={styles.item}>
          <div className={styles.linkSection}>
            <Link href={firstLevelItem.link}>
              <a className={styles.link}>{firstLevelItem.item}</a>
            </Link>
            {arrow}
          </div>
          {hiddenMenu}
        </li>
      );
    }
  );

  let navbarClasses = styles.navbar;
  navbarClasses += navbarIsOpened ? ` ${styles.navbarOpened}` : '';

  const separatorItemClasses = `${styles.item} ${styles.itemThemeStretched}`;

  const buttons =
    screenWidth <= PHONE_SCREEN_WIDTH
      ? <div className={styles.userSection}>
          <div className={styles.item}>
            <Link href='/'>
              <a className={styles.link}>Войти</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href='/'>
              <a className={styles.link}>Зарегистрироваться</a>
            </Link>
          </div>
        </div>
      : <div className={styles.userSection}>
          <div className={styles.item}>
            <Button link='/' theme='bordered' size='small' text='Войти' />
          </div>
          <div className={styles.item}>
            <Button
              link='/'
              theme='filled'
              size='small'
              text='Зарегистрироваться'
            />
          </div>
        </div>;

  const userSection = user
    ? <div className={styles.userSection}>
        <div className={separatorItemClasses}>
          <div className={styles.separator} />
        </div>
        <div className={styles.item}>
          <Link href='/'>
            <a className={styles.link}>{user}</a>
          </Link>
        </div>
      </div>
    : buttons;

  return (
    <div className={navbarClasses}>
      <div className={styles.body}>
        <nav className={styles.content}>
          {itemsElements}
        </nav>
        {userSection}
      </div>
    </div>
  );
};

export default Navbar;
