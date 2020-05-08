import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Nav from "../Nav/Nav";
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

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleHomeBtn = () => {
    this.props.history.push("/home");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Nav />
        {this.props.store.errors.loginMessage && (
          <h2 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h2>
        )}
        <center>
          <Paper className={classes.paper_class}>
            <Container>
              <form onSubmit={this.login}>
                <h1 className={classes.font}>Login</h1>
                <div>
                  <label htmlFor="username" className={classes.font}>
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
                  <label htmlFor="password" className={classes.font}>
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
                    value="Log In"
                  >
                    Log In
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
              this.props.dispatch({ type: "SET_TO_REGISTER_MODE" });
            }}
          >
            Register
          </button>
          <div>
            <button
              type="button"
              className={classes.link_btn}
              onClick={this.handleHomeBtn}
            >
              Home
            </button>
          </div>
        </center>
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(LoginPage));
