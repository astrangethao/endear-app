import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {
  Button,
  Container,
  Paper,
  withStyles,
  createStyles,
  TextField,
} from "@material-ui/core";
import "typeface-quicksand";

const customStyles = (theme) =>
  createStyles({
    root: {
      textAlign: "left",
    },
    paper_class: {
      maxWidth: "90%",
      height: "75vh",
      backgroundColor: "#786fa6",
      color: "white",
      padding: "3%",
      margin: "3%",
    },
    btn: {
      backgroundColor: "#cf6a87",
      color: "#fff",
      margin: "5%",
      fontFamily: "Quicksand",
      "&:hover": {
        background: "#e66767",
      },
    },
    font: {
      fontFamily: "Quicksand",
    },
  });

class DetailsPage extends Component {
  state = {
    details: "",
  };

  handleInputChange = (event) => {
    this.setState({
      details: event.target.value,
    });
  };

  registerDetails = (event) => {
    if (this.state.details) {
      this.props.dispatch({
        type: "REGISTER_DETAILS",
        payload: {
          ...this.props.store.registered,
          ...this.state,
        },
      });

      this.props.history.push("/audio");
    } else {
      this.props.dispatch({ type: "REGISTRATION_DETAILS_ERROR" });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <center>
        <Paper className={classes.paper_class}>
          <Container>
            <Button className={classes.btn}>Back</Button>
            <h3 className={classes.font}>About You</h3>
            <h2 className={classes.font}>Introduce Yourself!</h2>

            <TextField
              placeholder="How would your friends describe you?"
              name="Intro"
              type="text"
              multiline
              onChange={this.handleInputChange}
            />

            <div>
              <Button className={classes.btn} onClick={this.registerDetails}>
                Next
              </Button>
            </div>
          </Container>
        </Paper>
      </center>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(DetailsPage));
