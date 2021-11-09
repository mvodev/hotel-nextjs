import { useState, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';
import HeaderProps from './Types';

const Header = ({
  logo,
  user,
  navbarItems,
}: HeaderProps): React.ReactElement => {
  const [hamburgerIsActive, setHamburger] = useState(false);
  const handleBurgerClick = (): void => {
    setHamburger(!hamburgerIsActive);
  };

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
      <div
        className={styles.subHeader}
        style={{ height: `${headerHeight}px` }}
      />
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
            isOpened={hamburgerIsActive}
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
