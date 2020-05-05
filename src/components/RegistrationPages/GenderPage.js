import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class GenderPage extends Component {
  state = {
    gender_id: "",
  };

  handleInputChangeFor = (gender) => (event) => {
    if (gender === "Woman") {
      this.setState({
        gender_id: 1,
      });
    }

    if (gender === "Man") {
      this.setState({
        gender_id: 2,
      });
    }
  };
  render() {
    console.log(this.state.gender_id);

    return (
      <div className="container">
        <Button>Back</Button>
        <h3>About You</h3>
        <h2>I am a...</h2>
        <div className="input">
          <form>
            <input
              type="checkbox"
              name="gender-1"
              value="Woman"
              onChange={this.handleInputChangeFor("Woman")}
            />
            <label htmlFor="gender-1">Woman</label>
            <br></br>
            <input
              type="checkbox"
              name="gender-2"
              value="Man"
              onChange={this.handleInputChangeFor("Man")}
            />
            <label htmlFor="gender-2">Man</label>
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

export default GenderPage;
