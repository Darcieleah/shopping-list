import React, { FC } from 'react';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <div className={styles.Main} data-testid="Main">
    Main Component
  </div>
);

export default Main;
