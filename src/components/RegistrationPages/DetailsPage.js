import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class DetailsPage extends Component {
  handleBtn = (type) => (event) => {
    if (type === "back") {
      this.props.history.push("/photos");
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
        <h2>Introduce Yourself!</h2>
        <div className="input">
          <input
            placeholder="How would your friends describe you?"
            type="text"
          />
        </div>
        <div>
          <Button onClick={this.handleBtn("next")}>Next</Button>
        </div>
      </div>
    );
  }
}

export default DetailsPage;
