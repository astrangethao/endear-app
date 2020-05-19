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

class DobPage extends Component {
  state = {
    dob: "",
  };

  handleInputChange = (event) => {
    this.setState({
      dob: event.target.value,
    });
  };

  registerDob = (event) => {
    if (this.state.dob) {
      this.props.dispatch({
        type: "REGISTER_DOB",
        payload: {
          ...this.props.store.registered,
          ...this.state,
        },
      });

      this.props.history.push("/location");
    } else {
      this.props.dispatch({ type: "REGISTRATION_DOB_ERROR" });
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
            <h2 className={classes.font}>When were you born?</h2>
            <div className="input">
              <label className={classes.font} htmlFor="dob">
                Date Of Birth
              </label>
              <input type="date" name="dob" onChange={this.handleInputChange} />
            </div>
            <div>
              <Button className={classes.btn} onClick={this.registerDob}>
                Next
              </Button>
            </div>
          </Container>
        </Paper>
      </center>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(DobPage));
