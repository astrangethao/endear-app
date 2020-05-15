import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {
  Button,
  Container,
  Grid,
  Typography,
  withStyles,
  createStyles,
} from "@material-ui/core";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Carousel from "react-material-ui-carousel";
import coupleImageOne from "../Images/couple_1.jpeg";
import coupleImageTwo from "../Images/couple_2.jpeg";
import coupleImageThree from "../Images/couple_3.jpeg";

import "typeface-quicksand";
import "typeface-pacifico";

const customStyles = (theme) =>
  createStyles({
    root: {
      textAlign: "left",
    },
    body: {
      padding: "5px",
      marginBottom: "6%",
    },
    image: {
      maxWidth: "90%",
      padding: "5%",
    },
    btn: {
      backgroundColor: "#786fa6",
      color: "#fff",
      margin: "5%",
      width: "150px",
      padding: "15px",
      fontSize: "15px",
      fontFamily: "Quicksand",
      "&:hover": {
        background: "#cf6a87",
      },
    },
    typography: {
      margin: "2% 0",
      fontFamily: "Quicksand",
    },
    font: {
      fontFamily: "Pacifico",
      fontSize: "15px",
      textTransform: "lowercase",
      marginLeft: "5px",
    },
    img: {
      marginTop: "21px",
      maxHeight: "570px",
    },
    item: {
      textAlign: "center",
    },
  });

class LandingPage extends Component {
  onRegister = (event) => {
    this.props.dispatch({
      type: "SET_TO_REGISTER_MODE",
    });
    this.props.history.push("/login");
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Nav />
        <Container maxWidth={false}>
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={6} className={classes.body}>
              <Typography
                component="h1"
                variant="h2"
                className={classes.typography}
              >
                The dating app for people who hate dating apps.
              </Typography>
              <Typography className={classes.typography}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id felis metus. Vestibulum et pulvinar tortor. Morbi
                pharetra lacus ut ex molestie blandit. Etiam et turpis sit amet
                risus mollis interdum. Suspendisse et justo vitae metus bibendum
                fringilla sed sed justo. Aliquam sollicitudin dapibus lectus,
                vitae consequat odio elementum eget. Praesent efficitur eros
                vitae nunc interdum, eu interdum justo facilisis. Sed pulvinar
                nulla ac dignissim efficitur. Quisque eget eros metus.
                Vestibulum bibendum fringilla nibh a luctus. Duis a sapien
                metus.
              </Typography>

              <Typography className={classes.typography}>
                Praesent consectetur orci dui, id elementum eros facilisis id.
                Sed id dolor in augue porttitor faucibus eget sit amet ante.
                Nunc consectetur placerat pharetra. Aenean gravida ex ut erat
                commodo, ut finibus metus facilisis. Nullam eget lectus non urna
                rhoncus accumsan quis id massa. Curabitur sit amet dolor nisl.
                Proin euismod, augue at condimentum rhoncus, massa lorem semper
                lacus, sed lobortis augue mi vel felis. Duis ultrices sapien at
                est convallis congue.
              </Typography>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  className={classes.btn}
                  color="primary"
                  onClick={this.onRegister}
                >
                  J<span style={{ textTransform: "lowercase" }}>oin</span>
                  <span className={classes.font}>
                    <span style={{ textTransform: "uppercase" }}>E</span>ndear
                  </span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Carousel indicators={false}>
                <div className={classes.item}>
                  <img
                    className={classes.img}
                    src={coupleImageOne}
                    alt="couple_one"
                  />
                </div>
                <div className={classes.item}>
                  <img
                    className={classes.img}
                    src={coupleImageTwo}
                    alt="couple_two"
                  />
                </div>
                <div className={classes.item}>
                  <img
                    className={classes.img}
                    src={coupleImageThree}
                    alt="couple_three"
                  />
                </div>
              </Carousel>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(LandingPage));
