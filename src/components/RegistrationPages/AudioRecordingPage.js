import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { Recorder } from "react-voice-recorder";
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
      height: "100vh",
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
  state = {
    audioDetails: {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    },
  };

  handleAudioStop(data) {
    this.setState({ audioDetails: data }, () => {
      console.log("AUDIO DETAILS:", this.state);
    });
  }

  handleAudioUpload(file) {
    console.log("FILE:", file);
  }

  handleRest() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    this.setState({ audioDetails: reset });
  }

  render() {
    const { classes } = this.props;
    return (
      <center>
        <Paper className={classes.paper_class}>
          <Container>
            <Button className={classes.btn}>Back</Button>
            <h3 className={classes.font}>About You</h3>
            <h2 className={classes.font}>Record Yourself!</h2>

            <Recorder
              style={{
                width: "600px",
                height: "600px",
                backgroundColor: "white",
              }}
              record={true}
              title={"New recording"}
              audioURL={this.state.audioDetails.url}
              showUIAudio
              handleAudioStop={(data) => this.handleAudioStop(data)}
              handleAudioUpload={(data) => this.handleAudioUpload(data)}
              handleRest={() => this.handleRest()}
            />

            <center>
              <Button
                type="button"
                className={classes.font}
                onClick={() => {
                  this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
                }}
              >
                Login
              </Button>
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
