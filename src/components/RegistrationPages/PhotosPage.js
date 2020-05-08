import React, { Component } from "react";
import "./RegistrationPages.css";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {
  Button,
  Container,
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
      height: "75vh",
      backgroundColor: "#dfe4ea",
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

class PhotosPage extends Component {
  handleFinishedUpload = (info) => {
    this.props.dispatch({
      type: "REGISTER_PHOTOS",
      payload: {
        ...this.props.store.registered,
        link: info.fileUrl,
      },
    });
  };

  handleBtnNext = () => {
    this.props.dispatch({
      type: "SET_MODE",
    });
  };

  render() {
    const { classes } = this.props;
    const uploadOptions = {
      server: "http://localhost:5000",
      // signingUrlQueryParams: { uploadType: "avatar" },
    };
    const s3Url = "https://astrangethaobucket.s3.amazonaws.com";
    return (
      <center>
        <Paper className={classes.paper_class}>
          <Container>
            <Button className={classes.btn}>Back</Button>
            <h3 className={classes.font}>About You</h3>
            <h2 className={classes.font}>Add some photos!</h2>

            <DropzoneS3Uploader
              onFinish={this.handleFinishedUpload}
              s3Url={s3Url}
              maxSize={1024 * 1024 * 5}
              upload={uploadOptions}
            />

            <div>
              <Button className={classes.btn} onClick={this.handleBtnNext}>
                Next
              </Button>
            </div>
          </Container>
        </Paper>
      </center>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(PhotosPage));
