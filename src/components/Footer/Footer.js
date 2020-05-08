import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Typography, withStyles, createStyles } from "@material-ui/core";

import "typeface-pacifico";
import "typeface-quicksand";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
const customStyles = (theme) =>
  createStyles({
    root: {
      flexGrow: "1",
      overflow: "hidden",
    },
    footer_div: {
      display: "flex",
      height: "18vh",
      width: "100%",
      lineHeight: "1.3",
      fontFamily: "Quicksand",
      fontSize: "20px",
      backgroundColor: "#6f1e51",
    },
    footer_ul: {
      display: "inline-grid",
      gridAutoRows: "row",
      gridGap: "50px",
      justifyItems: "center",
      margin: "auto",
    },
    title: {
      fontFamily: "Pacifico",
      fontWeight: "700",
    },
  });

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.root}>
        <div className={classes.footer_div}>
          <ul className={classes.footer_ul}>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to="/about">
                <a href="#">About</a>
              </Link>
            </li>
            <li>
              <a href="#">Tips</a>
            </li>
            <li>
              <a href="#">Follow</a>
            </li>
          </ul>
          {/* <li className={classes.listItem}>
              <Typography className={classes.title} variant="h2" component="h1">
                Endear
              </Typography>
            </li> */}
        </div>
      </footer>
    );
  }
}

export default withStyles(customStyles)(Footer);
