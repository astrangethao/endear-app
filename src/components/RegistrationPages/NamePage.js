import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class NamePage extends Component {
  handleBtn = (type) => (event) => {
    if (type === "back") {
      alert("Please put in name!");
    }

    if (type === "next") {
      this.props.history.push("/gender");
    }
  };

  render() {
    return (
      <div className="container">
        <Button onClick={this.handleBtn("back")}>Back</Button>
        <h3>About You</h3>
        <h2>What's your name?</h2>
        <div className="input">
          <input placeholder="first name" type="text" />
          <input placeholder="last name" type="text" />
        </div>
        <div>
          <Button onClick={this.handleBtn("next")}>Next</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(NamePage);
