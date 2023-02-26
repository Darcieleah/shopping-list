import React from 'react'
import styles from './Bill.module.scss';

type OfferProps = {
  name: string;
  saving: number;
}

// show each of the saving names and the amount saved
function Offers(props: OfferProps) {
  return (
    <div className={styles.billRow}>
      <div>{props.name}</div>
      <div>£{props.saving.toFixed(2)}</div>
    </div>
  )
}

export default Offers;