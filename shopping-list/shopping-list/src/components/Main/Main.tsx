import React, { FC } from 'react';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <section className={styles.Main} data-testid="Main">
    <ul>
      <li>test item</li>
      <li>test item</li>
      <li>test item</li>
      <li>test item</li>
      <li>test item</li>
    </ul>
  </section>
);

export default Main;
