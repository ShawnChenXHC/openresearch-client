import React from 'react';
import styles from "./HomeButton.module.css"
import logo from "./Component.png";

function HomeButton() {
  return (
    <a href="#">
      <img src={logo} className={styles.logo} />
    </a>
  )
}

export default HomeButton;