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

class NamePage extends Component {
  state = {
    first_name: "",
    last_name: "",
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  registerName = (event) => {
    event.preventDefault();

    if (this.state.first_name && this.state.last_name) {
      this.props.dispatch({
        type: "REGISTER_NAME",
        payload: {
          ...this.props.store.registered,
          ...this.state,
        },
      });

      this.props.history.push("/gender");
    } else {
      this.props.dispatch({ type: "REGISTRATION_NAME_ERROR" });
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
            <h2 className={classes.font}>What's your name?</h2>

            <form onSubmit={this.registerName}>
              <div>
                <label className={classes.font} htmlFor="first_name">
                  First Name:
                  <input
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleInputChangeFor("first_name")}
                  />
                </label>
              </div>

              <div>
                <label className={classes.font} htmlFor="last_name">
                  Last Name:
                  <input
                    type="text"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.handleInputChangeFor("last_name")}
                  />
                </label>
              </div>

              <div>
                <Button className={classes.btn} type="submit">
                  Next
                </Button>
              </div>
            </form>
          </Container>
        </Paper>
      </center>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(NamePage));
