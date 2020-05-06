import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class LocationPage extends Component {
  render() {
    return (
      <div className="container">
        <Button>Back</Button>
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
          <Button>Next</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LocationPage);
