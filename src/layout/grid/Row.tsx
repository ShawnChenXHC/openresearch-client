import React from 'react';

import styles from "./Row.module.css"

function Row({children}: {children: any}) {
  return (
    <div className={styles.root}>{children}</div>
  )
}

export default Row;

