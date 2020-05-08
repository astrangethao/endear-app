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

class GenderPage extends Component {
  state = {
    gender_id: "",
  };

  handleInputChangeFor = (gender) => (event) => {
    if (gender === "Woman") {
      this.setState({
        gender_id: 1,
      });
    }

    if (gender === "Man") {
      this.setState({
        gender_id: 2,
      });
    }
  };

  registerGender = (event) => {
    event.preventDefault();

    if (this.state.gender_id) {
      this.props.dispatch({
        type: "REGISTER_GENDER",
        payload: {
          ...this.props.store.registered,
          ...this.state,
        },
      });

      this.props.history.push("/dob");
    } else {
      this.props.dispatch({ type: "REGISTRATION_GENDER_ERROR" });
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
            <h2 className={classes.font}>I am a...</h2>
            <div className="input">
              <form onSubmit={this.registerGender}>
                <input
                  type="checkbox"
                  name="gender-1"
                  value="Woman"
                  onChange={this.handleInputChangeFor("Woman")}
                />
                <label className={classes.font} htmlFor="gender-1">
                  Woman
                </label>
                <br></br>
                <input
                  type="checkbox"
                  name="gender-2"
                  value="Man"
                  onChange={this.handleInputChangeFor("Man")}
                />
                <label className={classes.font} htmlFor="gender-2">
                  Man
                </label>
                <br></br>
                <Button className={classes.btn} type="submit">
                  Next
                </Button>
              </form>
            </div>
          </Container>
        </Paper>
      </center>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(GenderPage));
