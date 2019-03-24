import React from 'react';

import styles from './Column.module.css';

function Column({
  children,
}: {children: any}) {
  return (
    <div className={styles.root}>{children}</div>
  )
}

export default Column;

