import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  createStyles,
} from "@material-ui/core";

import "typeface-pacifico";
import "typeface-quicksand";

const customStyles = (theme) =>
  createStyles({
    root: {
      flexGrow: "1",
    },
    title: {
      fontFamily: "Pacifico",
      flexGrow: 1,
      fontSize: "30px",
      fontWeight: "700",
      display: "inline-block",
    },
    nav: {
      background: "#c44569",
      overflow: "hidden",
    },
    nav_link: {
      fontFamily: "Quicksand",
      color: "#f2f2f2",
      backgroundColor: "#c44569",
      textAlign: "center",
      padding: "24px 10px",
      textDecoration: "none",
      fontSize: "15px",
    },
    nav_item: {
      display: "flex",
      flexDirection: "row",
    },
    btn: {
      backgroundColor: "#c44569",
      border: "none",
      color: "#f2f2f2",
      cursor: "pointer",
      fontSize: "15px",
      fontFamily: "Quicksand",
    },
  });

class Nav extends Component {
  state = {
    loginLinkData: {
      path: "/login",
      text: "Sign In",
    },
  };

  render() {
    if (this.props.store.user.id != null) {
      this.state.loginLinkData.path = "/admin";
      this.state.loginLinkData.text = "Profile";
    }

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.nav}>
          <Toolbar>
            <Typography variant="h4" component="h1" className={classes.title}>
              <Link to="/home">Endear</Link>
            </Typography>

            {/* Show the link to the info page and the logout button if the user is logged in */}

            <div className={classes.nav_item}>
              {this.props.store.user.id && (
                <Typography variant="body1" component="p">
                  <Link className={classes.nav_link} to="/match">
                    Matches
                  </Link>
                </Typography>
              )}

              {this.props.store.user.id && (
                <Typography variant="body1" component="p">
                  <Link className={classes.nav_link} to="/likes">
                    Likes
                  </Link>
                </Typography>
              )}

              {this.props.store.user.id && (
                <Typography variant="body1" component="p">
                  <Link className={classes.nav_link} to="/messages">
                    Messages
                  </Link>
                </Typography>
              )}

              <Typography variant="body1" component="p">
                <Link
                  className={classes.nav_link}
                  to={this.state.loginLinkData.path}
                >
                  {this.state.loginLinkData.text}
                </Link>
              </Typography>

              {this.props.store.user.id && (
                <LogOutButton className={classes.btn} />
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(Nav));
