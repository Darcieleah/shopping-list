import React from 'react'
import styles from './Product.module.scss';
import Item from '../../items/Item';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


type ProductProps = {
    products: Item[];
    onAdd: (product: Item) => void; 
}

function Product(props: ProductProps) {
  //TODO: add main ui styling to this and add to a table
  const rows = props.products;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Add button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">£{row.price.toFixed(2)}</TableCell>
              <TableCell align="right">
                <Button className={styles.addButton} variant="contained" onClick={() => props.onAdd(row)}>ADD</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Product;