import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class DobPage extends Component {
  state = {
    dob: "",
  };

  handleInputChange = (event) => {
    this.setState({
      dob: event.target.value,
    });
  };

  registerDob = (event) => {
    if (this.state.dob) {
      this.props.dispatch({
        type: "REGISTER_DOB",
        payload: {
          ...this.props.store.registered,
          ...this.state,
        },
      });

      this.props.history.push("/location");
    } else {
      this.props.dispatch({ type: "REGISTRATION_DOB_ERROR" });
    }
  };

  render() {
    return (
      <div className="container">
        <Button>Back</Button>
        <h3>About You</h3>
        <h2>When were you born?</h2>
        <div className="input">
          <label htmlFor="dob">Date Of Birth</label>
          <input type="date" name="dob" onChange={this.handleInputChange} />
        </div>
        <div>
          <Button onClick={this.registerDob}>Next</Button>
        </div>
      </div>
    );
  }
}

export default DobPage;
