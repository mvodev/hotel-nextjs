import Link from 'next/link';
import UserSection from '../UserSection/UserSection';
import styles from './Navbar.module.scss';
import { NavbarProps, NavbarListItem } from './Types';

const Navbar = ({
  items,
  user,
  isOpened,
}: NavbarProps): React.ReactElement => {
  const itemsCollections = items !== undefined ? items : [];
  const itemsElements = itemsCollections.map(
    (firstLevelItem: NavbarListItem) => {
      const hiddenItems = firstLevelItem.hiddenItems ? firstLevelItem.hiddenItems : [];
      const arrow = hiddenItems.length > 0 ? <span className={styles.arrow} >expand_more</span> : null;

      const secondLevelItems = hiddenItems.map((hiddenItem) => {
        const item = (
          <li key={hiddenItem.id} className={styles.item}>
            <Link href={hiddenItem.link}><a className={styles.link}>{hiddenItem.item}</a></Link>
          </li>
        );

        return item;
      });

      const hiddenMenu = secondLevelItems.length > 0 ?
          <ul className={styles.hiddenMenu}>{secondLevelItems}</ul> : null;

      return (
        <li key={firstLevelItem.id} className={styles.item}>
          <div className={styles.linkSection}>
            <Link href={firstLevelItem.link}><a className={styles.link}>{firstLevelItem.item}</a></Link>
            {arrow}
          </div>
          {hiddenMenu}
        </li>
      );
    }
  );

  let navbarClasses = styles.navbar;
  navbarClasses += isOpened ? ` ${styles.navbarOpened}` : '';

  return (
    <div className={navbarClasses}>
      <div className={styles.body}>
        <nav className={styles.content}>{itemsElements}</nav>
        <UserSection {...{ user }} />
      </div>
    </div>
  );
};

export default Navbar;
