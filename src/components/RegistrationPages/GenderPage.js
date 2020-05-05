import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class GenderPage extends Component {
  handleBtn = (type) => (event) => {
    if (type === "back") {
      this.props.history.push("/name");
    }

    if (type === "next") {
      this.props.history.push("/dob");
    }
  };

  render() {
    return (
      <div className="container">
        <Button onClick={this.handleBtn("back")}>Back</Button>
        <h3>About You</h3>
        <h2>I am a...</h2>
        <div className="input">
          <form>
            <input type="checkbox" name="gender-1" value="Woman" />
            <label htmlFor="gender-1">Woman</label>
            <br></br>
            <input type="checkbox" name="gender-2" value="Man" />
            <label htmlFor="gender-2">Man</label>
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

export default GenderPage;
