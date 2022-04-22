import React from "react";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import KegRow from "./KegRow.js"
import KegAddForm from './KegAddForm.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function KegParentContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }} >
        <Grid container spacing={2} >
          <Grid item xs={10}>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'right' }}>
            <Button variant="contained" size="small" >Add Keg</Button>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <h2>Kegs</h2>
              <KegAddForm />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default KegParentContainer;
