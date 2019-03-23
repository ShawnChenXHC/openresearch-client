import React from 'react';
import HomeButton from './HomeButton';

import styles from "./PageNavbar.module.css";

function PageNavbar() {
  return (
    <nav className={styles.root}>
      <HomeButton />
      <ul>
        {['Dashboard', 'Projects', 'Users'].map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </nav>
  )
}

export default PageNavbar;
