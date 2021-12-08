/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */

import Link from 'next/link';
import styles from './NavbarItem.module.scss';
import { NavbarItemProps } from './Types';

const NavbarItem = ({ item }: NavbarItemProps): React.ReactElement => {
  const hiddenItems = item.hiddenItems || [];
  const arrow =
    hiddenItems.length > 0 ? (
      <span className={styles.arrow}>expand_more</span>
    ) : null;

  const secondLevelItems = hiddenItems.map((item) => {
    return <NavbarItem key={item.id} {...{ item }} />;
  });

  const hiddenMenu =
    hiddenItems.length > 0 ? (
      <ul className={styles.hiddenMenu}>{secondLevelItems}</ul>
    ) : null;

  return (
    <li className={styles.item}>
      <div className={styles.linkSection}>
        <Link href={item.link}>
          <a className={styles.link} onClick={item.callback}>
            {item.item}
          </a>
        </Link>
        {arrow}
      </div>
      {hiddenMenu}
    </li>
  );
};

export default NavbarItem;
