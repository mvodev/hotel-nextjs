import Link from 'next/link';
import Button from '../button/button';
import styles from './navbar.module.scss';

type NavbarProps = {
  items?: NavbarListItem[];
  user?: string;
  navbarIsOpened?: boolean;
};

type NavbarListItem = {
  id: number;
  item: string;
  hiddenItems?: NavbarListItem[];
};

const Navbar = ({
  items,
  user,
  navbarIsOpened,
}: NavbarProps): React.ReactElement => {
  const itemsCollections = items !== undefined ? items : [];
  const itemsElements = itemsCollections.map(
    (firstLevelItem: NavbarListItem) => {
      const hiddenItems = firstLevelItem.hiddenItems
        ? firstLevelItem.hiddenItems
        : [];

      const arrow =
        hiddenItems.length > 0 ? (
          <span className={styles.navbar__arrow}>expand_more</span>
        ) : null;

      const secondLevelItems = hiddenItems.map((hiddenItem) => {
        const item = (
          <li key={hiddenItem.id} className={styles.navbar__item}>
            <Link href='/'>
              <a className={styles.navbar__link}>{hiddenItem.item}</a>
            </Link>
          </li>
        );
        return item;
      });

      const hiddenMenu =
        secondLevelItems.length > 0 ? (
          <ul className={styles['navbar__hidden-menu']}>{secondLevelItems}</ul>
        ) : null;

      return (
        <li key={firstLevelItem.id} className={styles.navbar__item}>
          <div className={styles['navbar__link-section']}>
            <Link href='/'>
              <a className={styles.navbar__link}>{firstLevelItem.item}</a>
            </Link>
            {arrow}
          </div>
          {hiddenMenu}
        </li>
      );
    }
  );

  let navbarClasses = styles.navbar;
  navbarClasses += navbarIsOpened ? ` ${styles.navbar_opened}` : '';

  const separatorItemClasses = `${styles.navbar__item} ${styles.navbar__item_theme_stretched}`;

  const buttons = navbarIsOpened
    ? [
        <li className={styles.navbar__item}>
          <Link href='/'>
            <a className={styles.navbar__link}>Войти</a>
          </Link>
        </li>,
        <li className={styles.navbar__item}>
          <Link href='/'>
            <a className={styles.navbar__link}>Зарегистрироваться</a>
          </Link>
        </li>,
      ]
    : [
        <li className={styles.navbar__item}>
          <Button link='/' theme='bordered' size='small' text='Войти' />
        </li>,
        <li className={styles.navbar__item}>
          <Button
            link='/'
            theme='filled'
            size='small'
            text='Зарегистрироваться'
          />
        </li>,
      ];

  const userSection = user
    ? [
        <li className={separatorItemClasses}>
          <div className={styles.navbar__separator} />
        </li>,
        <li className={styles.navbar__item}>
          <Link href='/'>
            <a className={styles.navbar__link}>{props.user}</a>
          </Link>
        </li>,
      ]
    : buttons;

  return (
    <div className={navbarClasses}>
      <div className={styles.navbar__body}>
        <nav className={styles.navbar__content}>
          {itemsElements}
          {userSection}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
