import React from 'react'
import styles from './Product.module.scss';
import Item from '../../items/Item';

type ProductProps = {
    key: number,
    product: Item,
    onAdd: (product: Item) => void; 
}

function Product(props: ProductProps) {
  //TODO: add main ui styling to this and add to a table
  return (
    <div className={styles.productList}>
        <div>{props.product.name}</div>
        <div>{props.product.price}</div>
        <button onClick={() => props.onAdd(props.product)}>ADD</button>
    </div>
  )
}

export default Product;