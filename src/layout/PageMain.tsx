import React from 'react';
import styles from './PageMain.module.css';

function PageMain({children}: {children: any}) {
  return <div className={styles.root}>{children}</div>;
}

export default PageMain;
