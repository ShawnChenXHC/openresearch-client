import React from 'react';
import styles from './PageComposer.module.css';

function PageComposer(
  {main, navbar, footer}: {main: any, navbar: any, footer: any}
) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {navbar}
        {main}
        {footer}
      </div>
    </div>
  );
}

export default PageComposer;
