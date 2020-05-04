import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class InterestPage extends Component {
  handleBtn = (type) => (event) => {
    if (type === "back") {
      this.props.history.push("/phone");
    }

    if (type === "next") {
      this.props.history.push("/photos");
    }
  };

  render() {
    return (
      <div className="container">
        <Button onClick={this.handleBtn("back")}>Back</Button>
        <h3>About You</h3>
        <h2>I am interested in...</h2>
        <div className="input">
          <form>
            <input type="checkbox" name="gender-1" value="Women" />
            <label for="gender-1">Women</label>
            <br></br>
            <input type="checkbox" name="gender-2" value="Men" />
            <label for="gender-2">Men</label>
            <br></br>
          </form>
        </div>
        <div>
          <Button onClick={this.handleBtn("next")}>Next</Button>
        </div>
      </div>
    );
  }
}

export default InterestPage;
