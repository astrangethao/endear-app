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

class AudioRecordingPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <center>
        <Paper className={classes.paper_class}>
          <Container>
            <Button className={classes.btn}>Back</Button>
            <h3>About You</h3>
            <h2>Record Yourself!</h2>

            <input placeholder="Audio" type="text" />

            <center>
              {/* <Button
              type="button"
              className="link-button"
              onClick={() => {
                this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
              }}
            >
              Login
            </Button> */}
            </center>
          </Container>
        </Paper>
      </center>
    );
  }
}

export default withStyles(customStyles)(
  connect(mapStoreToProps)(AudioRecordingPage)
);
