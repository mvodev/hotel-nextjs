import { useState } from 'react';
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

const Header = ({
  logo,
  user,
  navbarItems,
}: HeaderProps): React.ReactElement => {
  const [hamburgerIsActive, setHamburger] = useState(false);
  const handleBurgerClick = (): void => {
    setHamburger(!hamburgerIsActive);
  };

  let burgerClasses = styles.burger;
  burgerClasses += hamburgerIsActive ? ` ${styles.burgerActive}` : '';

  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;
