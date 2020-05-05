import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class AudioRecordingPage extends Component {
  handleBtn = (type) => (event) => {
    if (type === "back") {
      this.props.history.push("/details");
    }

    if (type === "next") {
      this.props.history.push("/audio");
    }
  };

  render() {
    return (
      <div className="container">
        <Button onClick={this.handleBtn("back")}>Back</Button>
        <h3>About You</h3>
        <h2>Record Yourself!</h2>
        <div className="input">
          <input placeholder="Audio" type="text" multiline />
        </div>
        <div>
          <center>
            <Button
              type="button"
              className="link-button"
              onClick={() => {
                this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
              }}
            >
              Login
            </Button>
          </center>
        </div>
      </div>
    );
  }
}

export default AudioRecordingPage;