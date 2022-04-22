import React from "react";
import Grid from '@mui/material/Grid';
import Keg from "./Keg.js";

function KegRow(props) {

  return (
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          {props.kegs.map((keg) => (
            <Grid key={keg.id}>
              <Keg
                id={keg.id}
                name={keg.name}
                brand={keg.brand}
                abv={keg.abv}
                price={keg.price}
                stock={keg.stock} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default KegRow;
