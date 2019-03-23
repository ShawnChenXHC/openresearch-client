import React from 'react';
import HomeButton from './HomeButton';

import styles from "./PageNavbar.module.css";

function PageNavbar() {
  return (
    <nav className={styles.root}>
      <HomeButton />
      <ul className={styles.list}>
        {['Dashboard', 'Projects', 'Users'].map((name, index) => (
          <li className={styles.listItem} key={index}>{name}</li>
        ))}
      </ul>
    </nav>
  )
}

export default PageNavbar;
