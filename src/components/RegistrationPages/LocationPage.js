import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class LocationPage extends Component {
  state = {
    city: "",
    zipcode: "",
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="container">
        <Button>Back</Button>
        <h3>About You</h3>
        <h2>Where do you primarily live?</h2>
        <div className="input">
          <form onSubmit={this.registerLocation}>
            <input
              type="text"
              name="city"
              onChange={this.handleInputChangeFor("city")}
            />
            <label htmlFor="city">City</label>
            <br></br>
            <input
              type="text"
              name="zipcode"
              pattern="[0-9] {5}"
              title="Five Digit zip code"
              onChange={this.handleInputChangeFor("zipcode")}
            />
            <label htmlFor="zipcode">Zip code</label>
            <br></br>
            <Button type="submit">Next</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LocationPage);
