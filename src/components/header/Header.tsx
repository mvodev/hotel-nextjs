import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import styles from './header.module.scss';

const config = require('./config.json');

const Header = (): React.ReactElement => {
  const [hamburgerIsActive, setHamburger] = useState(false);
  const handleBurgerClick = (): void => {
    setHamburger(!hamburgerIsActive);
  };

  let burgerClasses = styles.header__burger;
  burgerClasses += hamburgerIsActive ? ` ${styles.header__burger_active}` : '';

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <a href='/'>
          <img className={styles.header__logo} src={config.logo}></img>
        </a>
        <Navbar navbarIsOpened={hamburgerIsActive} />
        <div className={burgerClasses} onClick={handleBurgerClick}>
          <div className={styles['header__burger-image']}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
