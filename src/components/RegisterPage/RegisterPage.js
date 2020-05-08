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
import Nav from "../Nav/Nav";

const customStyles = (theme) =>
  createStyles({
    root: {
      textAlign: "left",
    },
    paper_class: {
      maxWidth: "30%",
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
    link_btn: {
      fontFamily: "Quicksand",
      fontSize: "15px",
      background: "none",
      color: "inherit",
      border: "none",
      padding: "0",
      outline: "0",
      borderBottom: "1px solid #444",
      cursor: "pointer",
    },
  });

class RegisterPage extends Component {
  state = {
    username: "",
    password: "",
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "REGISTER",
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });

      this.props.history.push("/name");
    } else {
      this.props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Nav />
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <center>
          <Paper className={classes.paper_class}>
            <Container>
              <form onSubmit={this.registerUser}>
                <h1 className={classes.font}>Register User</h1>
                <div>
                  <label className={classes.font} htmlFor="username">
                    Email:
                    <input
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChangeFor("username")}
                    />
                  </label>
                </div>
                <div>
                  <label className={classes.font} htmlFor="password">
                    Password:
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChangeFor("password")}
                    />
                  </label>
                </div>
                <div>
                  <Button
                    className={classes.btn}
                    type="submit"
                    name="submit"
                    value="Register"
                  >
                    Register
                  </Button>
                </div>
              </form>
            </Container>
          </Paper>
        </center>
        <center>
          <button
            type="button"
            className={classes.link_btn}
            onClick={() => {
              this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
            }}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(RegisterPage));
