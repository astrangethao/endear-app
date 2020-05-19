import React, { Component } from "react";
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

class PhonePage extends Component {
  state = {
    phone_number: "",
  };

  handleInputChange = (event) => {
    this.setState({
      phone_number: Number(event.target.value),
    });
  };

  registerPhone = (event) => {
    if (this.state.phone_number) {
      this.props.dispatch({
        type: "REGISTER_PHONE",
        payload: {
          ...this.props.store.registered,
          ...this.state,
        },
      });

      this.props.history.push("/interest");
    } else {
      this.props.dispatch({ type: "REGISTRATION_PHONE_ERROR" });
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
            <h2 className={classes.font}>What is your phone number?</h2>
            <div className="input">
              <label className={classes.font} htmlFor="phone">
                Phone Number
              </label>
              <input
                placeholder="Phone Number"
                type="number"
                name="phone"
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <Button className={classes.btn} onClick={this.registerPhone}>
                Next
              </Button>
            </div>
          </Container>
        </Paper>
      </center>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(PhonePage));
