import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import styles from './header.module.scss';

type HeaderProps = {
  logo: string;
  user?: string;
  navbarItems?: Record<string, string | string[]>;
};

const Header = ({
  logo,
  user,
  navbarItems,
}: HeaderProps): React.ReactElement => {
  const [hamburgerIsActive, setHamburger] = useState(false);
  const handleBurgerClick = (): void => {
    setHamburger(!hamburgerIsActive);
  };

  let burgerClasses = styles.header__burger;
  burgerClasses += hamburgerIsActive ? ` ${styles.header__burger_active}` : '';

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link href='/'>
          <a>
            <img className={styles.header__logo} src={logo} alt='logo' />
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
          <div className={styles['header__burger-image']} />
        </button>
      </div>
    </header>
  );
};

export default Header;
