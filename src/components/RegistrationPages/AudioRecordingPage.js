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

let rec;

class AudioRecordingPage extends Component {
  state = {
    audioSrc: "",
    audioChunks: [],
    isRecording: false,
  };

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.handlerFunction(stream);
    });
  }

  handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = (e) => {
      this.state.audioChunks.push(e.data);
      if (rec.state == "inactive") {
        let blob = new Blob(this.state.audioChunks, {
          type: "audio/wav;codecs=MS_PCM",
        });

        this.setState({
          audioSrc: URL.createObjectURL(blob),
        });
        // sendData(blob);
      }
    };
  }

  record = (e) => {
    console.log("I was clicked");
    this.setState({
      isRecording: true,
      audioChunks: [],
    });
    rec.start();
  };

  stopRecord = (e) => {
    console.log("I was clicked");
    this.setState({
      isRecording: false,
    });
    rec.stop();
  };

  render() {
    const { classes } = this.props;
    return (
      <center>
        <Paper className={classes.paper_class}>
          <Container>
            <Button className={classes.btn}>Back</Button>
            <h3 className={classes.font}>About You</h3>
            <h2 className={classes.font}>Record Yourself!</h2>
            <Button onClick={this.record} disabled={this.state.isRecording}>
              {this.state.isRecording ? "RECORDING" : "RECORD"}
            </Button>
            <Button
              onClick={this.stopRecord}
              disabled={!this.state.isRecording}
            >
              STOP
            </Button>
            <audio
              hidden={!this.state.audioSrc}
              src={this.state.audioSrc}
              controls={true}
            ></audio>
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
