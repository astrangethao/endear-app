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
      backgroundColor: "#786fa6",
      height: "300px",
      width: "600px",
      textAlign: "center",
      margin: "30px",
    },
    carousel: {
      margin: "10%",
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
    icon_btn: {
      color: "white",
      margin: "10px",
    },
  });

class MatchPage extends Component {
  state = {
    user_1_id: this.props.store.user.id,
    user_2_id: "",
    match_user_1: false,
    match_user_2: false,
    bgColor: "#786fa6",
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER_DETAILS" });
    this.props.dispatch({
      type: "GET_OPTIONS",
    });
  }

  handleMatch = (type, id) => (event) => {
    if (type === "pass") {
      this.setState(
        {
          ...this.state,
          user_2_id: id,
          match_user_1: false,
          bgColor: "#303952",
        },
        () => {
          this.props.dispatch({
            type: "POST_MATCHES",
            payload: this.state,
          });
        }
      );
    }

    if (type === "like") {
      this.setState(
        {
          ...this.state,
          user_2_id: id,
          match_user_1: true,
          bgColor: "#f78fb3",
        },
        () => {
          this.props.dispatch({
            type: "POST_MATCHES",
            payload: this.state,
          });
        }
      );
    }
  };

  render() {
    const { classes } = this.props;
    const detail = this.props.store.userDetails[0] || [];
    const options = this.props.store.options || [];

    const filteredOptions = options.filter((option) => {
      return option.gender_id === detail.gender_preference;
    });

    return (
      <div>
        <Nav />
        <div className={classes.container}>
          <Carousel className={classes.carousel} autoPlay={false}>
            {filteredOptions.map((item, index) => {
              return (
                <Card
                  key={index}
                  className={classes.card}
                  style={{ background: this.state.bgColor }}
                >
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
                  <IconButton
                    className={classes.icon_btn}
                    onClick={this.handleMatch("pass", item.user_id)}
                  >
                    <NotInterestedIcon />
                  </IconButton>
                  <IconButton
                    className={classes.icon_btn}
                    onClick={this.handleMatch("like", item.user_id)}
                  >
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
