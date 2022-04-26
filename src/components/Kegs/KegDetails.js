import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function KegDetails(props) {

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 2, width: '50ch' },
      }}
    >
      <Typography variant="h4" component="h4" fontWeight="fontWeightLight">
        <span style={{ fontSize: '.5em' }}>name:</span> {props.keg.name}
      </Typography>
      <Typography variant="h4" component="h4" fontWeight="fontWeightLight">
        <span style={{ fontSize: '.5em' }}>brand:</span> {props.keg.brand}
      </Typography>
      <Typography variant="h4" component="h4" fontWeight="fontWeightLight">
        <span style={{ fontSize: '.5em' }}>abv:</span> {props.keg.abv}%
      </Typography>
      <Typography variant="h4" component="h4" fontWeight="fontWeightLight">
        <span style={{ fontSize: '.5em' }}>price:</span> ${props.keg.price}
      </Typography>
      <Typography variant="h4" component="h4" fontWeight="fontWeightLight">
        <span style={{ fontSize: '.5em' }}>stock:</span> {props.keg.stock} / 124
      </Typography>
    </Box >
  )
}
