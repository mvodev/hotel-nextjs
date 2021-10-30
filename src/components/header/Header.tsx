import Navbar from '../navbar/Navbar';
import styles from './header.module.scss';

const config = require('./config.json');

const Header = (): React.ReactElement => {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <a href='/'>
          <img className={styles.header__logo} src={config.logo}></img>
        </a>
        <Navbar />
        <div className={styles.header__burger}>
          <div className={styles['header__burger-image']}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
