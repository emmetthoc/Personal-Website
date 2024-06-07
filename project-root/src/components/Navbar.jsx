import React from 'react';
import Image from 'next/image';
import styles from '../assets/styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbarNav}>
      <div className={styles.navbarLogo}>Emmett Hersh-O'Connor</div>
      <ul className={styles.navbarListItems}>
        <li className={styles.navbarListItem}>rawr</li>
        <li className={styles.navbarListItem}>rawr</li>
        <li className={styles.navbarListItem}>rawr</li>
        <li className={styles.navbarListItem}>rawr</li>
        <li className={styles.navbarListItem}>rawr</li>
        <li className={styles.navbarListItem}>rawr</li>
        <li className={styles.navbarListItem}>rawr</li>
        <li className={styles.navbarListItem}>rawr</li>
        <li className={styles.navbarListItem}>rawr</li>
        <li className={styles.navbarListItem}>rawr</li>
      </ul>
    </nav>
  );
};

export default Navbar;
