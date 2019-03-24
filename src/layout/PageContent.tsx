import React from 'react';
import styles from './PageContent.module.css';

function PageContent({children}: {children: any}) {
  return <div className={styles.root}>{children}</div>;
}

export default PageContent;
