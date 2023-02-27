import React, { useState } from 'react';
import styles from './Bill.module.scss';
import BilledItem from '../../items/BilledItem';
import Offers from './Offers';
import Button from '@mui/material/Button';


type BillProps = {
  billItems: BilledItem[],
  //TODO: add on add functionality directly from bill
  //TODO: add on remove functionality directly from bill
  onClear: () => void;
}

//TODO move billed item class into here as an interface?
interface Offer {
  name: string;
  saving: number;
}

function Bill(props: BillProps) {

  function getTotalPrice(billItems: BilledItem[]): number {
    return billItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  const [beforeSavings, setBeforeSavings] = useState<number>(getTotalPrice(props.billItems));
  const [afterSavings, setAfterSavings] = useState<number>(beforeSavings);
  const [savings, setSavings] = useState<Offer[]>([]);

  // had to add a button to calculate savings so it doesn't happen on render and cause loop error
  // TODO: improve this - only calculate savings when bill items is populated?
  const handleCalculateSavings = () => {
    let totalSavings: Offer[] = [];

    // TODO: use enums instead of hardcoding to id value from product data
    // TODO: display name of offer in user friendly way

    // When you buy a Cheese, you get a second Cheese free!
    const cheeseCount = props.billItems.find(x => x.id === 3)?.quantity;
    if (cheeseCount && cheeseCount > 1) {
      const freeCheeseCount = Math.floor(cheeseCount / 2);
      const cheeseSavings = freeCheeseCount * 0.9;
      totalSavings.push({name: "BOGOF on cheese", saving: cheeseSavings});
    }

    //When you buy a Soup, you get a half price Bread!
    const soupCount = props.billItems.find(x => x.id === 4)?.quantity;
    const breadCount = props.billItems.find(x => x.id === 1)?.quantity;
    if (soupCount && breadCount) {
      const halfPriceBreadCount = Math.min(soupCount, breadCount);
      const breadSavings = halfPriceBreadCount * 0.55;
      totalSavings.push({name: "Half price bread with soup", saving: breadSavings});
    }

    // Get a third off Butter!
    const butterCount = props.billItems.find(x => x.id === 5)?.quantity;
    if (butterCount) {
      const butterSavings = butterCount * 0.4;
      totalSavings.push({name: "1/3 off butter", saving: butterSavings});
    }

    // add all the saving values from the offers
    const totalSavingsAmount = Object.values(totalSavings).reduce((acc, offer) => acc + offer.saving, 0);
    setSavings(totalSavings);
    setBeforeSavings(getTotalPrice(props.billItems));
    // TODO: should be able to use beforeSavings value below instead of calling total price again?
    setAfterSavings(getTotalPrice(props.billItems) - totalSavingsAmount);
  };

  const resetBill = () => {
    setBeforeSavings(0);
    setAfterSavings(0);
    setSavings([]);
    props.onClear();
  };
  
  //TODO: only show savings and total footer if there are bill items

  return (
  <aside className={styles.Bill} data-testid="Bill">
    <h2 className={styles.billHeading}>Your Bill</h2>
    <div>{props.billItems.length === 0 && <p>"No items"</p>}</div>
    {props.billItems.map((item) => (
    <div className={styles.billRow} key={item.id}>
      <p>{item.name}</p>
      <p>£{item.price.toFixed(2)}</p>
      <p>x{item.quantity}</p>
    </div>
    ))}
    <div className={styles.extraMargin}>
      <p>Total Before savings: £{beforeSavings.toFixed(2)}</p>
      <p>Your savings:</p>
      {savings.map(offer => (<Offers key={offer.name} name={offer.name} saving={offer.saving}></Offers>))}
      <p>Total After savings: £{afterSavings.toFixed(2)}</p>  
    </div>
    <Button className={styles.calculateButton} variant="contained" onClick={handleCalculateSavings}>Calculate my bill</Button>
    <Button className={styles.clearButton} variant="contained" onClick={() => resetBill()}>Clear my bill</Button>
  </aside>
)};

export default Bill;
