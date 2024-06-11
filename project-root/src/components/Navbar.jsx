import React from 'react';
import Image from 'next/image';
import styles from '../assets/styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={'navbarNav ' + styles.navbarNav}>
      <div className={'navbarLogo ' + styles.navbarLogo}>
        Emmett Hersh-O'Connor
      </div>
      <ul className={'navbarListItems ' + styles.navbarListItems}>
        <li className={styles.navbarListItem}>Home</li>
        <li className={styles.navbarListItem}>About Me</li>
        <li className={styles.navbarListItem}>Contact</li>
        <li className={styles.navbarListItem}>Projects</li>
      </ul>
    </nav>
  );
};

export default Navbar;
