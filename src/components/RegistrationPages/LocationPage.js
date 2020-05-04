import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class LocationPage extends Component {
  handleBtn = (type) => (event) => {
    if (type === "back") {
      this.props.history.push("/dob");
    }

    if (type === "next") {
      this.props.history.push("/phone");
    }
  };

  render() {
    return (
      <div className="container">
        <Button onClick={this.handleBtn("back")}>Back</Button>
        <h3>About You</h3>
        <h2>Where do you primarily live?</h2>
        <div className="input">
          <input placeholder="City" type="text" name="city" />
          <input
            placeholder="Zip code"
            type="text"
            name="zipcode"
            pattern="[0-9] {5}"
            title="Five Digit zip code"
          />
        </div>
        <div>
          <Button onClick={this.handleBtn("next")}>Next</Button>
        </div>
      </div>
    );
  }
}

export default LocationPage;
