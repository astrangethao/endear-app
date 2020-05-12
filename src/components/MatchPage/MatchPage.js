import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import {
  Card,
  CardContent,
  CardHeader,
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
  state = {
    gender_preference: "",
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER_DETAILS" });
    this.props.dispatch({
      type: "GET_MATCHES",
    });
  }

  render() {
    const { classes } = this.props;
    const detail = this.props.store.userDetails[0] || [];
    const matches = this.props.store.matches || [];

    const filteredMatches = matches.filter((match) => {
      return match.gender_id === detail.gender_preference;
    });

    console.log("TEST LOG:", filteredMatches);

    return (
      <div>
        <Nav />
        <div className={classes.root}>
          <center>
            {filteredMatches.map((item, index) => {
              return (
                <Card key={index}>
                  <CardHeader
                    title={item.first_name}
                    subheader={item.gender_id === 1 ? "Woman" : "Man"}
                  />{" "}
                  <CardContent>
                    <img
                      src={item.link}
                      alt="match profile"
                      style={{ maxWidth: "400px", maxHeight: "200px" }}
                    />
                  </CardContent>
                </Card>
              );
            })}
          </center>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(MatchPage));
