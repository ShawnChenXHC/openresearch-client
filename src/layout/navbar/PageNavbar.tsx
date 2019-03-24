import React from 'react';
import HomeButton from './HomeButton';

import styles from "./PageNavbar.module.css";

function PageNavbar({links}: {links: any}) {
  return (
    <nav className={styles.root}>
      <HomeButton />
      <ul className={styles.list}>
        {links.map((link: any, index: number) => (
          <li className={styles.listItem} key={index}>{link}</li>
        ))}
      </ul>
    </nav>
  )
}

export default PageNavbar;
