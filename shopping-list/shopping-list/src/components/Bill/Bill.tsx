import React, { FC } from 'react';
import styles from './Bill.module.scss';

interface BillProps {}

const Bill: FC<BillProps> = () => (
  <div className={styles.Bill} data-testid="Bill">
    Bill Component
  </div>
);

export default Bill;
