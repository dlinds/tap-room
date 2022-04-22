import React from "react";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Keg(props) {
  return (
    <React.Fragment>
      <Paper
        sx={{
          width: 200,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      ><h4 style={{ marginBottom: '0' }}>Pilsner</h4>
        <Grid container spacing={2} sx={{ px: 2 }}>
          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <p>Blue Moon</p>
            <p>7% ABV</p>
          </Grid>
          <Grid item xs={6}>
            <p>$7 / pint</p>
            <p>100 / 124</p>
          </Grid>
        </Grid>
        <Button variant="contained" size="small" sx={{ mb: 1, px: 2 }} >Add Keg</Button>
      </Paper>
    </React.Fragment >
  )
}
