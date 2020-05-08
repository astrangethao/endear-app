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
import coupleImage from "../Images/couple.jpg";

import "typeface-quicksand";
import "typeface-pacifico";

const customStyles = (theme) =>
  createStyles({
    root: {
      textAlign: "left",
    },
    body: {
      padding: "5px",
      marginBottom: "3%",
    },
    image: {
      maxWidth: "90%",
      padding: "5%",
    },
    btn: {
      backgroundColor: "#e66767",
      color: "#fff",
      margin: "5%",
      fontFamily: "Quicksand",
      "&:hover": {
        background: "#cf6a87",
      },
    },
    typography: {
      margin: "2% 0",
      fontFamily: "Quicksand",
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

              <Button
                className={classes.btn}
                color="primary"
                onClick={this.onRegister}
              >
                Join Endear
              </Button>
            </Grid>
            <Grid item xs={6}>
              <img src={coupleImage} alt="couple" className={classes.image} />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(LandingPage));
