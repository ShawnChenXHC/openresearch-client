import React from 'react';
import styles from './PageComposer.module.css';

function PageComposer(
  {content, navbar, footer}: {content: any, navbar: any, footer: any}
) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {navbar}
        {content}
        {footer}
      </div>
    </div>
  );
}

export default PageComposer;
