import React, { FC } from 'react';
import styles from './Bill.module.scss';

interface BillProps {}

const Bill: FC<BillProps> = () => (
  <section className={styles.Bill} data-testid="Bill">
    <ul>
      <li>test bill item</li>
      <li>test bill item</li>
      <li>test bill item</li>
      <li>test bill item</li>
      <li>test bill item</li>
      <li>test bill item</li>
    </ul>
  </section>
);

export default Bill;
