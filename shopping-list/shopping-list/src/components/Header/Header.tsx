import React, { FC } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className={styles.Header} data-testid="Header">
    <h1>Shopping List</h1>
  </header>
);

export default Header;
