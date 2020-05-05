import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class NamePage extends Component {
  state = {
    first_name: "",
    last_name: "",
  };

  handleBtn = (type) => (event) => {
    if (type === "back") {
      alert("Please put in name!");
    }
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  registerName = (event) => {
    event.preventDefault();

    if (this.state.first_name && this.state.last_name) {
      this.props.dispatch({
        type: "REGISTER_NAME",
        payload: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
        },
      });

      this.props.history.push("/gender");
    } else {
      this.props.dispatch({ type: "REGISTRATION_NAME_ERROR" });
    }
  };

  render() {
    return (
      <div className="container">
        <Button onClick={this.handleBtn("back")}>Back</Button>
        <h3>About You</h3>
        <h2>What's your name?</h2>

        <form className="formPanel" onSubmit={this.registerName}>
          <div>
            <label htmlFor="first_name">
              First Name:
              <input
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChangeFor("first_name")}
              />
            </label>
          </div>

          <div>
            <label htmlFor="last_name">
              Last Name:
              <input
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor("last_name")}
              />
            </label>
          </div>

          <div>
            <Button>Next</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default NamePage;
