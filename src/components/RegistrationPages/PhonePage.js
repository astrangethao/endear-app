import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class PhonePage extends Component {
  state = {
    phone_number: "",
  };

  handleInputChange = (event) => {
    this.setState({
      phone_number: Number(event.target.value),
    });
  };

  registerPhone = (event) => {
    if (this.state.phone_number) {
      this.props.dispatch({
        type: "REGISTER_PHONE",
        payload: {
          ...this.props.store.registered,
          ...this.state,
        },
      });

      this.props.history.push("/interest");
    } else {
      this.props.dispatch({ type: "REGISTRATION_PHONE_ERROR" });
    }
  };

  render() {
    console.log(this.state);

    return (
      <div className="container">
        <Button>Back</Button>
        <h3>About You</h3>
        <h2>What is your phone number?</h2>
        <div className="input">
          <label htmlFor="phone">Phone Number</label>
          <input
            placeholder="Phone Number"
            type="number"
            name="phone"
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <Button onClick={this.registerPhone}>Next</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PhonePage);
