import React from "react";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Keg(props) {

  function handlePintSale(event) {

  }

  // function handleGettingKegDetails(event) {
  //   console.log(event)
  // }

  return (
    <React.Fragment>
      <Paper
        sx={{
          width: 220,
          paddingTop: 1,
          marginRight: 3,
          marginBottom: 2,
        }}
      ><h2 style={{ marginBottom: '0' }}>{props.name}</h2>

        <Grid container spacing={2} sx={{ px: 2 }}>
          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <p >
              <strong>Brand</strong>
              <br />
              ${props.brand}
            </p>
            <p >
              <strong>ABV</strong>
              <br />
              {props.abv}%
            </p>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <p >
              <strong>Price</strong>
              <br />
              ${props.price} / pint
            </p>
            <p >
              <strong>Pints Left</strong>
              <br />
              {props.stock} / 124
            </p>
          </Grid>
        </Grid>
        <Button variant="contained" size="small" type="button" sx={{ mb: 1, px: 2 }} >Sell Pint</Button>
        <Button variant="contained" size="small" type="button" sx={{ mb: 1, ml: 2, px: 2 }} onClick={() => props.kegDetails(props.id)}>Details</Button>

      </Paper>
    </React.Fragment >
  )
}
