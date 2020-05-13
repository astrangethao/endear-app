import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  withStyles,
  createStyles,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import Carousel from "react-material-ui-carousel";
import ReactAudioPlayer from "react-audio-player";
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
    card: {
      backgroundColor: "#e66767",
      height: "300px",
      width: "500px",
      textAlign: "center",
      margin: "30px",
    },
    carousel: {
      margin: "100px",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    font: {
      fontFamily: "Quicksand",
      color: "white",
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
        <div className={classes.container}>
          <Carousel className={classes.carousel} autoPlay={false}>
            {filteredMatches.map((item, index) => {
              return (
                <Card key={index} className={classes.card}>
                  <CardHeader
                    className={classes.font}
                    title={item.first_name}
                    subheader={item.city}
                  />
                  <CardContent>
                    <ReactAudioPlayer
                      src={item.audio}
                      autoPlay={false}
                      controls
                    />
                  </CardContent>
                  <IconButton className={classes.font}>
                    <NotInterestedIcon />
                  </IconButton>
                  <IconButton className={classes.font}>
                    <FavoriteIcon />
                  </IconButton>
                </Card>
              );
            })}
          </Carousel>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(MatchPage));
