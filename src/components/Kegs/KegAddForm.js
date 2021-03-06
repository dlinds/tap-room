import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function KegAddForm(props) {

  function handleNewKeg(event) {
    event.preventDefault();
    props.addNewKeg({ name: event.target.name.value, brand: event.target.brand.value, abv: event.target.abv.value, price: event.target.price.value, stock: event.target.stock.value, id: v4() })
    event.target.reset();
  }

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleNewKeg}
    >
      <h1>Add Keg</h1>
      <div>
        <TextField
          fullWidth
          label="Name"
          name="name"
          variant="standard"
          required />
      </div>
      <div>
        <TextField
          name="brand"
          fullWidth
          label="Brand"
          variant="standard"
          required
        />
      </div>
      <div>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '24ch' }}>
          <InputLabel htmlFor="abv-input">ABV</InputLabel>
          <Input
            id="abv-input"
            name="abv"
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
              'min': 0,
              'max': 99
            }}
            type='number'
            required
          />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '24ch' }}>
          <InputLabel htmlFor="price-input">Price</InputLabel>
          <Input
            id="price-input"
            name="price"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
              'min': 0
            }}
            type='number'
            required
          />
        </FormControl>
        <input
          type="hidden"
          value="124"
          name="stock" />
      </div>
      <Button variant="contained" size="small" type="submit" sx={{ mt: 3 }} >Add Keg</Button>
    </Box>

  )
}


KegAddForm.propTypes = {
  addNewKeg: PropTypes.func
};

export default KegAddForm;
