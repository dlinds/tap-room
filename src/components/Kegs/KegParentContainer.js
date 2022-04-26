import React from "react";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import KegRow from "./KegRow.js"
import KegAddForm from './KegAddForm.js';
import KegDetails from './KegDetails.js';

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
      pageView: "form",
      selectedKeg: null
    };
  }
  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      kegList: newKegList
    });
    this.setState({ pageView: "home" })
  }

  // handleAddCancelBackClick = () => {
  //   this.setState(prevState => ({
  //     pageView: !prevState.pageView
  //   }));
  // }
  handleAddCancelBackClick = (event) => {
    if (event === "Cancel") {
      this.setState({ pageView: "home" })
    } else if (event === "Back") {
      this.setState({ pageView: "home" })
    } else {
      this.setState({ pageView: "form" })
    }
  }

  handleClickKegForDetails = (e) => {
    console.log(e.target);
    this.setState({ pageView: "details" })
    const selectedKeg = this.state.kegList.filter(k => k.id === e)[0];
    this.setState({ selectedKeg: selectedKeg });
    console.log(this.state.selectedKeg)
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.pageView === "form") {
      currentlyVisibleState = <KegAddForm addNewKeg={this.handleAddingNewKegToList} />
      buttonText = "Cancel";
    } else if (this.state.pageView === "details") {
      currentlyVisibleState = <KegDetails keg={this.state.selectedKeg} />
      buttonText = "Back"
    } else {
      currentlyVisibleState = <KegRow kegs={this.state.kegList} kegDetails={this.handleClickKegForDetails} />
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ p: 2 }} >
          <Grid container spacing={2} >
            <Grid item xs={10}>
            </Grid>
            <Grid item xs={2} style={{ textAlign: 'right' }}>
              <Button variant="contained" size="small" onClick={() => this.handleAddCancelBackClick(buttonText)}>{buttonText}</Button>
            </Grid>
            <Grid item xs={12}>
              <Item>
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
