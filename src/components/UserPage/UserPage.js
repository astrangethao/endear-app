import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import {
  Button,
  Paper,
  withStyles,
  createStyles,
  TextField,
  Input,
} from "@material-ui/core";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import CakeIcon from "@material-ui/icons/Cake";
import PhoneIcon from "@material-ui/icons/Phone";
import WcIcon from "@material-ui/icons/Wc";
import "typeface-quicksand";

const customStyles = (theme) =>
  createStyles({
    root: {
      textAlign: "left",
    },
    paper_class: {
      maxWidth: "90%",
      height: "60vh",
      backgroundColor: "#786fa6",
      padding: "3%",
      margin: "3%",
      color: "white",
    },

    font: {
      fontFamily: "Quicksand",
      color: "white",
    },
    textField: {
      fontFamily: "Quicksand",
      color: "white",
      width: "400px",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "left",
    },
    item: {
      marginTop: "0",
      marginLeft: "40px",
      textAlign: "left",
      flexGrow: "1",
      flexShrink: "1",
    },
    btn: {
      backgroundColor: "#cf6a87",
      color: "#fff",
      margin: "3%",
      width: "100px",
      fontFamily: "Quicksand",
      "&:hover": {
        background: "#c44569",
      },
    },
    edit: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  });

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  state = {
    edit: false,
    updatedProfile: {
      id: "",
      details: "",
      phone_number: "",
    },
  };

  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_USER_DETAILS",
    });
  }

  handleChange = (type) => (event) => {
    if (type === "details") {
      this.setState({
        updatedProfile: {
          ...this.state.updatedProfile,
          id: this.props.store.user.id,
          details: event.target.value,
        },
      });
    }

    if (type === "phone_number") {
      this.setState({
        updatedProfile: {
          ...this.state.updatedProfile,
          id: this.props.store.user.id,
          phone_number: Number(event.target.value),
        },
      });
    }
  };

  handleEdit = (type) => (event) => {
    if (type === "edit") {
      this.setState({
        edit: true,
      });
    }

    if (type === "save") {
      this.props.dispatch({
        type: "UPDATE_PROFILE",
        payload: this.state.updatedProfile,
      });
      this.setState({
        edit: false,
      });
    }
  };

  render() {
    const { classes } = this.props;
    const detail = this.props.store.userDetails || [];
    console.log("UPDATED PROFILE:", this.state.updatedProfile);

    const userDetail = (
      <div>
        <div>
          <p>Details: </p>
          <p className={classes.textField}>{this.props.store.user.details}</p>
        </div>
        <div>
          <p>
            <PhoneIcon /> {this.props.store.user.phone_number}
          </p>
        </div>
        <div className={classes.edit}>
          <Button className={classes.btn} onClick={this.handleEdit("edit")}>
            Edit
          </Button>
        </div>
      </div>
    );

    const editDetail = (
      <div>
        <p>Details:</p>
        <TextField
          className={classes.textField}
          multiline
          rows={3}
          defaultValue={this.props.store.user.details}
          variant="outlined"
          onChange={this.handleChange("details")}
        />
        <div>
          <PhoneIcon />
          <Input
            label="phone number"
            defaultValue={this.props.store.user.phone_number}
            onChange={this.handleChange("phone_number")}
          />
        </div>
        <div className={classes.edit}>
          <Button className={classes.btn} onClick={this.handleEdit("save")}>
            Save
          </Button>
        </div>
      </div>
    );

    return (
      <div>
        <Nav />

        <Paper className={classes.paper_class}>
          <div className={classes.font}>
            {detail.map((item, index) => {
              return (
                <div key={index} className={classes.container}>
                  <div className={classes.item}>
                    <img
                      src={item.user_photo}
                      alt="profile"
                      style={{
                        maxWidth: "400px",
                        maxHeight: "200px",
                        border: "3px solid black",
                      }}
                    />
                  </div>
                  <div className={classes.item}>
                    <h2>
                      {this.props.store.user.first_name}{" "}
                      {this.props.store.user.last_name}
                    </h2>
                    <p>
                      <LocationCityIcon /> {item.city}, {item.zip_code}
                    </p>

                    <p>
                      <CakeIcon /> {this.props.store.user.dob}
                    </p>
                    <p>
                      <WcIcon /> {item.gender}
                    </p>
                  </div>
                  <div className={classes.item}>
                    {!this.state.edit ? (
                      <div>{userDetail}</div>
                    ) : (
                      <div>{editDetail}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Paper>

        <Footer />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default withStyles(customStyles)(connect(mapStoreToProps)(UserPage));
