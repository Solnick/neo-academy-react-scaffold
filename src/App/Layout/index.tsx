import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Header from './Header';

const Layout: FunctionComponent<{}> = ({
  children
}) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
);

export default Layout;
