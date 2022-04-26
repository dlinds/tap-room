import React from "react";
import Grid from '@mui/material/Grid';
import Keg from "./Keg.js";
import PropTypes from "prop-types";

function KegRow(props) {

  return (
    <Grid sx={{ flexGrow: 1 }} container justifyContent="center">
      <h1>Keg List</h1>
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
                stock={keg.stock}
                sellPint={props.sellPint}
                kegDetails={props.kegDetails} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

KegRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  sellPint: PropTypes.func,
  kegDetails: PropTypes.func
};

export default KegRow;
