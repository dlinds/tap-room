import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


export default function KegAddForm(props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="standard-basic" fullWidth label="Name" variant="standard" />
      </div>
      <div>
        <TextField id="standard-basic" fullWidth label="Brand" variant="standard" />
      </div>
      <div>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '24ch' }}>
          <InputLabel htmlFor="standard-adornment-weight">ABV</InputLabel>
          <Input
            id="standard-adornment-weight"
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
          <InputLabel htmlFor="standard-adornment-weight">Price</InputLabel>
          <Input
            id="standard-adornment-weight"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
              'min': 0
            }}
          />
        </FormControl>

      </div>
      <Button variant="contained" size="small" sx={{ mt: 3 }} >Add Keg</Button>
    </Box>

  )
}
