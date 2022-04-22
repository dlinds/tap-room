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
    this.setState({ pageView: "details" })
    console.log("handleClickKegForDetails")
  }

  render() {
    let currentlyVisibleState = null;
    let addCancelText = null;
    if (this.state.pageView === "form") {
      currentlyVisibleState = <KegAddForm addNewKeg={this.handleAddingNewKegToList} />
      addCancelText = "Cancel";
    } else if (this.state.pageView === "details") {
      currentlyVisibleState = <KegDetails />
      addCancelText = "Back"
    } else {
      currentlyVisibleState = <KegRow kegs={this.state.kegList} kegDetails={this.handleClickKegForDetails} />
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
              <Button variant="contained" size="small" onClick={() => this.handleAddCancelBackClick(addCancelText)}>{addCancelText}</Button>
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
