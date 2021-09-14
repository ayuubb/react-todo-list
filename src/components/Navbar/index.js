import styles from './Navbar.module.css';

import shoppingIcon from '../../assets/shopping-icon.svg';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={shoppingIcon} className={styles.nav__icon} alt="shopping icon" />
      <h1 className={styles.nav__title}>Shopping List</h1>
    </nav>
  );
};

export default Navbar;
