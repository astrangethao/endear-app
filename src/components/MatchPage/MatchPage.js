import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Paper,
  withStyles,
  createStyles,
} from "@material-ui/core";
import "typeface-quicksand";

const customStyles = (theme) =>
  createStyles({
    root: {
      textAlign: "left",
    },
    paper_class: {
      maxWidth: "90%",
      height: "100vh",
      backgroundColor: "#fff",
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

class MatchPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Nav />
        <div className={classes.root}>
          <center>
            <Paper className={classes.paper_class}>
              <Card>
                <CardHeader
                  title={
                    (this.props.store.user.first_name,
                    this.props.store.user.last_name)
                  }
                  subheader={this.props.store.user.dob}
                />
                <CardContent></CardContent>
              </Card>
            </Paper>
          </center>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(MatchPage));
