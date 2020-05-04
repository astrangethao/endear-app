import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class DobPage extends Component {
  handleBtn = (type) => (event) => {
    if (type === "back") {
      this.props.history.push("/gender");
    }

    if (type === "next") {
      this.props.history.push("/location");
    }
  };

  render() {
    return (
      <div className="container">
        <Button onClick={this.handleBtn("back")}>Back</Button>
        <h3>About You</h3>
        <h2>When were you born?</h2>
        <div className="input">
          <input placeholder="Date of Birth" type="date" name="dob" />
        </div>
        <div>
          <Button onClick={this.handleBtn("next")}>Next</Button>
        </div>
      </div>
    );
  }
}

export default DobPage;
