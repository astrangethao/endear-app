import React, { Component } from "react";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Container, Paper, withStyles, createStyles } from "@material-ui/core";
import "typeface-quicksand";

const customStyles = (theme) =>
  createStyles({
    root: {
      textAlign: "left",
    },
    paper_class: {
      maxWidth: "90%",
      height: "100vh",
      backgroundColor: "#dfe4ea",
      padding: "3%",
      margin: "3%",
    },
    btn: {
      backgroundColor: "#cf6a87",
      color: "#fff",
      margin: "5%",
      fontFamily: "Quicksand",
      "&:hover": {
        background: "#e66767",
      },
    },
    font: {
      fontFamily: "Quicksand",
    },
  });

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_USER_DETAILS",
    });
  }
  render() {
    const { classes } = this.props;
    const detail = this.props.store.userDetails || [];
    console.log("DETAIL:", detail);

    return (
      <div>
        <Nav />
        <center>
          <Paper className={classes.paper_class}>
            <Container>
              <div className={classes.font}>
                {detail.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={item.user_photo}
                        alt="profile"
                        style={{ maxWidth: "400px", maxHeight: "200px" }}
                      />
                      <p>
                        {this.props.store.user.first_name}{" "}
                        {this.props.store.user.last_name}
                      </p>
                      <p>Location: {item.city}</p>
                      <p>Zip Code: {item.zip_code}</p>

                      <p>Gender: {item.gender}</p>
                    </div>
                  );
                })}
              </div>

              <p className={classes.font}>
                Details: {this.props.store.user.details}
              </p>
              <p className={classes.font}>
                Phone Number: {this.props.store.user.phone_number}
              </p>

              <LogOutButton className="log-in" />
            </Container>
          </Paper>
        </center>
        <Footer />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default withStyles(customStyles)(connect(mapStoreToProps)(UserPage));
