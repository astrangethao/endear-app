import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  createStyles,
} from "@material-ui/core";

const customStyles = (theme) =>
  createStyles({
    root: {
      flexGrow: "1",
    },
    title: {
      flexGrow: 1,
    },
    nav: {
      background: "#6f1e51",
    },
    nav_right: {
      float: "right",
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
              <Link className="nav-link" to={this.state.loginLinkData.path}>
                {this.state.loginLinkData.text}
              </Link>

              {/* Show the link to the info page and the logout button if the user is logged in */}
              {this.props.store.user.id && (
                <>
                  <Link className="nav-link" to="/info">
                    Info Page
                  </Link>
                  <LogOutButton className="nav-link" />
                </>
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
