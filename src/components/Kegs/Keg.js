import React from "react";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Keg(props) {
  return (
    <React.Fragment>
      <Paper
        sx={{
          width: 220,
          paddingTop: 1,
          marginRight: 3,
          marginBottom: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      ><h3 style={{ marginBottom: '0' }}>{props.name}</h3>
        <Grid container spacing={2} sx={{ px: 2 }}>
          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <p>{props.brand}</p>
            <p>{props.abv}% ABV</p>
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
        <Button variant="contained" size="small" sx={{ mb: 1, px: 2 }} >Sell Pint</Button>
      </Paper>
    </React.Fragment >
  )
}
