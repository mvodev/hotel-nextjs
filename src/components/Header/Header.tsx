import { useState, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

type NavbarListItem = {
  id: number;
  item: string;
  link: string;
  hiddenItems?: NavbarListItem[];
};

type HeaderProps = {
  logo: string;
  user?: string;
  navbarItems?: NavbarListItem[];
};

const Header = ({ logo, user, navbarItems }: HeaderProps): React.ReactElement => {
  const [hamburgerIsActive, setHamburger] = useState(false);
  const handleBurgerClick = (): void => { setHamburger(!hamburgerIsActive); };

  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useCallback((node) => {
    if (node !== null) {
      setHeaderHeight(node.getBoundingClientRect().height);
    }
  }, []);

  let burgerClasses = styles.burger;
  burgerClasses += hamburgerIsActive ? ` ${styles.burgerActive}` : '';

  return (
    <header className={styles.header}>
      <div className={styles.subHeader} style={{ height: `${headerHeight}px` }} />
      <div className={styles.body} ref={headerRef}>
        <div className={styles.content}>
          <Link href='/'>
            <a>
              <img className={styles.logo} src={logo} alt='logo' />
            </a>
          </Link>
          <Navbar
            items={navbarItems}
            user={user}
            navbarIsOpened={hamburgerIsActive}
          />
          <button
            type='button'
            className={burgerClasses}
            onClick={handleBurgerClick}
          >
            <div className={styles.burgerImage} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
