import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class InterestPage extends Component {
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

  registerGenderInterest = (event) => {
    event.preventDefault();

    if (this.state.gender_id) {
      this.props.dispatch({
        type: "REGISTER_INTEREST",
        payload: {
          ...this.props.store.registered,
          ...this.state,
        },
      });

      // this.props.history.push("/photos");
    } else {
      this.props.dispatch({ type: "REGISTRATION_INTEREST_ERROR" });
    }
  };

  render() {
    console.log(this.state);

    return (
      <div className="container">
        <Button>Back</Button>
        <h3>About You</h3>
        <h2>I am interested in...</h2>
        <div className="input">
          <form onSubmit={this.registerGenderInterest}>
            <input
              type="checkbox"
              name="gender-1"
              value="Woman"
              onChange={this.handleInputChangeFor("Woman")}
            />
            <label htmlFor="gender-1">Women</label>
            <br></br>
            <input
              type="checkbox"
              name="gender-2"
              value="Man"
              onChange={this.handleInputChangeFor("Man")}
            />
            <label htmlFor="gender-2">Men</label>
            <br></br>
            <Button type="submit">Next</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(InterestPage);
