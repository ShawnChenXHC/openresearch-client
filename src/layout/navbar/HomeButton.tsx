import React from 'react';
import styles from "./HomeButton.module.css"
import logo from "./Component.svg";
import {Link} from 'react-router-dom';

function HomeButton() {
  return (
    <Link to="/">
      <img src={logo} className={styles.logo} />
    </Link>
  )
}

export default HomeButton;
