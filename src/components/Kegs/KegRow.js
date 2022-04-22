import React from "react";
import Grid from '@mui/material/Grid';
import Keg from "./Keg.js";

function KegRow(props) {

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={8}>
          {[0, 1, 2, 3, 4].map((value) => (
            <Grid key={value} item>
              <Keg />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default KegRow;
