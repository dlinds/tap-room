import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { v4 } from 'uuid';

export default function KegAddForm(props) {

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
      <div>
        <TextField
          fullWidth
          label="Name"
          name="name"
          variant="standard" />
      </div>
      <div>
        <TextField
          name="brand"
          fullWidth
          label="Brand"
          variant="standard" />
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
