import Link from 'next/link';
import Button from '../button/button';
import styles from './navbar.module.scss';

const config = require('./config.json');

type NavbarListItem = {
  item: string;
  hiddenItems: string[];
};

const Navbar = (): React.ReactElement => {
  const items = config.items.map((firstLevelItem: NavbarListItem) => {
    const hiddenItems = firstLevelItem.hiddenItems
      ? firstLevelItem.hiddenItems
      : [];
    const arrow =
      hiddenItems.length > 0 ? (
        <span className={styles.navbar__arrow}>expand_more</span>
      ) : null;
    const secondLevelItems = hiddenItems.map((hiddenItem) => {
      return (
        <li className={styles.navbar__item}>
          <a className={styles.navbar__link}>{hiddenItem}</a>
        </li>
      );
    });
    const hiddenMenu =
      secondLevelItems.length > 0 ? (
        <ul className={styles['navbar__hidden-menu']}>{secondLevelItems}</ul>
      ) : null;

    return (
      <li className={styles.navbar__item}>
        <div className={styles['navbar__link-section']}>
          <Link href='/'>
            <a className={styles.navbar__link}>{firstLevelItem.item}</a>
          </Link>
          {arrow}
        </div>
        {hiddenMenu}
      </li>
    );
  });

  return (
    <nav className={styles.navbar}>
      {items}
      <li className={styles.navbar__item}>
        <Button link='/' theme='bordered' size='small' text='Войти' />
      </li>
      <li className={styles.navbar__item}>
        <Button
          link='/'
          theme='filled'
          size='small'
          text='Зарегистрироваться'
        />
      </li>
    </nav>
  );
};

export default Navbar;
