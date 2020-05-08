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
    nav_right: {
      float: "right",
    },
    nav_link: {
      float: "left",
      fontFamily: "Quicksand",
      color: "#f2f2f2",
      backgroundColor: "#c44569",
      textAlign: "center",
      padding: "24px 10px",
      textDecoration: "none",
      fontSize: "15px",
    },
  });

class Nav extends Component {
  state = {
    loginLinkData: {
      path: "/home",
      text: "Sign In",
    },
  };

  render() {
    if (this.props.store.user.id != null) {
      this.state.loginLinkData.path = "/admin";
      this.state.loginLinkData.text = "Home";
    }

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.nav}>
          <Toolbar>
            <Typography variant="h4" component="h1" className={classes.title}>
              <Link to="/home">Endear</Link>
            </Typography>

            <div className={classes.nav_right}>
              <Typography variant="body1" component="p">
                <Link
                  className={classes.nav_link}
                  to={this.state.loginLinkData.path}
                >
                  {this.state.loginLinkData.text}
                </Link>
              </Typography>

              {/* Show the link to the info page and the logout button if the user is logged in */}
              {this.props.store.user.id && (
                <Typography variant="body1" component="p">
                  <Link className={classes.nav_link} to="/info">
                    Info Page
                  </Link>
                  <LogOutButton />
                </Typography>
              )}
              {/* Always show this link since the about page is not protected */}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(Nav));
