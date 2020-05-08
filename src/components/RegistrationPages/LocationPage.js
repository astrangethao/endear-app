import React, { Component } from "react";
import "./RegistrationPages.css";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {
  Button,
  Container,
  Paper,
  withStyles,
  createStyles,
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
      backgroundColor: "#dfe4ea",
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

class LocationPage extends Component {
  state = {
    city: "",
    zipcode: "",
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  registerLocation = (event) => {
    event.preventDefault();

    if (this.state.city && this.state.zipcode) {
      this.props.dispatch({
        type: "REGISTER_LOCATION",
        payload: {
          ...this.props.store.registered,
          ...this.state,
        },
      });

      this.props.history.push("/phone");
    } else {
      this.props.dispatch({ type: "REGISTRATION_LOCATION_ERROR" });
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
            <h2 className={classes.font}>Where do you primarily live?</h2>

            <form onSubmit={this.registerLocation}>
              <label className={classes.font} htmlFor="city">
                City
              </label>
              <input
                type="text"
                name="city"
                onChange={this.handleInputChangeFor("city")}
              />
              <br></br>
              <label className={classes.font} htmlFor="zipcode">
                Zip code
              </label>
              <input
                type="text"
                name="zipcode"
                onChange={this.handleInputChangeFor("zipcode")}
              />

              <br></br>
              <Button className={classes.btn} type="submit">
                Next
              </Button>
            </form>
          </Container>
        </Paper>
      </center>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(LocationPage));
