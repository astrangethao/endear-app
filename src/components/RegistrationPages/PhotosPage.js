import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class PhotosPage extends Component {
  handleBtn = (type) => (event) => {
    if (type === "back") {
      this.props.history.push("/interest");
    }

    if (type === "next") {
      this.props.history.push("/details");
    }
  };

  render() {
    return (
      <div className="container">
        <Button onClick={this.handleBtn("back")}>Back</Button>
        <h3>About You</h3>
        <h2>Add some photos!</h2>
        <div className="input">
          <input placeholder="images" />
        </div>
        <div>
          <Button onClick={this.handleBtn("next")}>Next</Button>
        </div>
      </div>
    );
  }
}

export default PhotosPage;
