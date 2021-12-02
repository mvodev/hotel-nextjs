import NavbarItem from '../NavbarItem/NavbarItem';
import UserSection from '../UserSection/UserSection';
import styles from './Navbar.module.scss';
import NavbarProps from './Types';

const Navbar = ({
  items = [],
  isOpened,
}: NavbarProps): React.ReactElement => {
  const itemsElements = items.map((item) => (
    <NavbarItem key={item.id} {...{ item }} />
  ));

  let navbarClasses = styles.navbar;
  navbarClasses += isOpened ? ` ${styles.navbarOpened}` : '';

  return (
    <div className={navbarClasses}>
      <div className={styles.body}>
        <nav className={styles.content}>{itemsElements}</nav>
        <UserSection/>
      </div>
    </div>
  );
};

export default Navbar;
