import React from "react";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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




class KegParentContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kegList: [],
      formVisibleOnPage: false
    };
  }
  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      kegList: newKegList
    });
    console.log(newKeg);
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }


  render() {
    let currentlyVisibleState = null;
    let addCancelText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <KegAddForm addNewKeg={this.handleAddingNewKegToList} />
      addCancelText = "Cancel";
    } else {
      currentlyVisibleState = <KegRow kegs={this.state.kegList} />
      addCancelText = "Add Keg"
    }
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ p: 2 }} >
          <Grid container spacing={2} >
            <Grid item xs={10}>
            </Grid>
            <Grid item xs={2} style={{ textAlign: 'right' }}>
              <Button variant="contained" size="small" onClick={this.handleClick}>{addCancelText}</Button>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <h2>Kegs</h2>
                {currentlyVisibleState}
              </Item>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default KegParentContainer;
