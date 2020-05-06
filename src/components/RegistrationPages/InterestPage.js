import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class InterestPage extends Component {
  render() {
    return (
      <div className="container">
        <Button>Back</Button>
        <h3>About You</h3>
        <h2>I am interested in...</h2>
        <div className="input">
          <form>
            <input type="checkbox" name="gender-1" value="Women" />
            <label htmlFor="gender-1">Women</label>
            <br></br>
            <input type="checkbox" name="gender-2" value="Men" />
            <label htmlFor="gender-2">Men</label>
            <br></br>
          </form>
        </div>
        <div>
          <Button>Next</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(InterestPage);
