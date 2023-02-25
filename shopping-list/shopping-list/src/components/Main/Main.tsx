import React, { FC } from 'react';
import styles from './Main.module.scss';

interface MainProps {
  products: { id: number; name: string; price: number; }[];
}

const Main: FC<MainProps> = ({products}) => {
  return (
  <main className={styles.Main} data-testid="Main">
    <ul>
        {
           products.map(product => <li value={product.name} key={product.id}> {product.name} {product.price} </li>)
        }
      </ul>
  </main>
  )
};

export default Main;
