// src/app/navigation/Navigation.js
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navItem}><a href="#about">About</a></li>
      <li className={styles.navItem}><a href="#skills">Skills</a></li>
      <li className={styles.navItem}><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navigation;
