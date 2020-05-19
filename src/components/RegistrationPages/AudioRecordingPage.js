import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import UploadDisplay from "./UploadDisplay";
import {
  Button,
  Container,
  Paper,
  withStyles,
  createStyles,
} from "@material-ui/core";
import "typeface-quicksand";

const dropStyles = {
  width: "200px",
  height: "200px",
  border: "2px solid #cf6a87",
};

const customStyles = (theme) =>
  createStyles({
    root: {
      textAlign: "left",
    },
    paper_class: {
      maxWidth: "90%",
      height: "120vh",
      backgroundColor: "#786fa6",
      color: "white",
      padding: "3%",
      margin: "3%",
    },
    btn: {
      backgroundColor: "#cf6a87",
      color: "#fff",
      width: "100px",
      margin: "5px",
      fontFamily: "Quicksand",
      "&:hover": {
        background: "#e66767",
      },
    },
    font: {
      fontFamily: "Quicksand",
    },
    audio: {
      display: "flex",
      flexDirection: "column",
      margin: "20px",
      alignItems: "center",
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

  handleFinishedUpload = (info) => {
    if (
      this.props.store.registered.username &&
      this.props.store.registered.password
    ) {
      this.props.dispatch({
        type: "REGISTER_AUDIO",
        payload: {
          ...this.props.store.registered,
          link: info.fileUrl,
        },
      });
    }
  };

  handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = (e) => {
      this.state.audioChunks.push(e.data);
      if (rec.state === "inactive") {
        let blob = new Blob(this.state.audioChunks, {
          type: "audio/wav;codecs=MS_PCM",
        });

        this.setState({
          audioSrc: URL.createObjectURL(blob),
        });
      }
    };
  }

  record = (e) => {
    this.setState({
      isRecording: true,
      audioChunks: [],
    });
    rec.start();
  };

  stopRecord = (e) => {
    this.setState({
      isRecording: false,
    });
    rec.stop();
  };

  render() {
    const { classes } = this.props;
    const uploadOptions = {
      server: "http://localhost:5000",
    };
    const s3Url = "https://astrangethaobucket.s3.amazonaws.com";
    return (
      <center>
        <Paper className={classes.paper_class}>
          <Container>
            <Button className={classes.btn}>Back</Button>
            <h3 className={classes.font}>About You</h3>
            <h2 className={classes.font}>Record Yourself!</h2>

            <div className={classes.audio}>
              <Button
                className={classes.btn}
                onClick={this.record}
                disabled={this.state.isRecording}
              >
                {this.state.isRecording ? "RECORDING" : "RECORD"}
              </Button>
              <Button
                className={classes.btn}
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
            </div>

            <DropzoneS3Uploader
              onFinish={this.handleFinishedUpload}
              s3Url={s3Url}
              style={dropStyles}
              maxSize={1024 * 1024 * 5}
              upload={uploadOptions}
            >
              <UploadDisplay />
            </DropzoneS3Uploader>

            <center>
              <Button
                type="button"
                className={classes.btn}
                onClick={() => {
                  this.props.history.push("/admin");
                }}
              >
                Login
              </Button>
            </center>
          </Container>

          <Container>
            <h3>How to use:</h3>
            <p>
              Step 1. Click on the record button and start your introduction.
            </p>
            <p>Step 2. Stop the recording and an audio player will appear.</p>
            <p>
              Step 3. Play back your recording, if you like it click on the
              three dots to download a wav file.
            </p>
            <p>
              Step 4. Once the wav file is done downloading drag and drop file
              into the pink square uploader.
            </p>
            <p>
              Step 5. Once the file is in the uploader, login by clicking the
              login button!
            </p>
          </Container>
        </Paper>
      </center>
    );
  }
}

export default withStyles(customStyles)(
  connect(mapStoreToProps)(AudioRecordingPage)
);
