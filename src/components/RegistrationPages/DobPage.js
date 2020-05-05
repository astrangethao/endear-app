import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class DobPage extends Component {
  render() {
    return (
      <div className="container">
        <Button>Back</Button>
        <h3>About You</h3>
        <h2>When were you born?</h2>
        <div className="input">
          <input placeholder="Date of Birth" type="date" name="dob" />
        </div>
        <div>
          <Button>Next</Button>
        </div>
      </div>
    );
  }
}

export default DobPage;
