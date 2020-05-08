import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import "./RegistrationPages.css";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class DetailsPage extends Component {
  state = {
    details: "",
  };

  handleInputChange = (event) => {
    this.setState({
      details: event.target.value,
    });
  };

  registerDetails = (event) => {
    if (this.state.details) {
      this.props.dispatch({
        type: "REGISTER_DETAILS",
        payload: {
          ...this.props.store.registered,
          ...this.state,
        },
      });

      this.props.history.push("/audio");
    } else {
      this.props.dispatch({ type: "REGISTRATION_DETAILS_ERROR" });
    }
  };

  render() {
    return (
      <div className="container">
        <Button>Back</Button>
        <h3>About You</h3>
        <h2>Introduce Yourself!</h2>
        <div className="input">
          <TextField
            placeholder="How would your friends describe you?"
            name="Intro"
            type="text"
            multiline
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <Button onClick={this.registerDetails}>Next</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DetailsPage);
