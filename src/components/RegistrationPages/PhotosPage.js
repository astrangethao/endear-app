import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

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
    const uploadOptions = {
      server: "http://localhost:5000",
      // signingUrlQueryParams: { uploadType: "avatar" },
    };
    const s3Url = "https://astrangethaobucket.s3.amazonaws.com";
    return (
      <div className="container">
        <Button>Back</Button>
        <h3>About You</h3>
        <h2>Add some photos!</h2>
        <div className="input">
          <DropzoneS3Uploader
            onFinish={this.handleFinishedUpload}
            s3Url={s3Url}
            maxSize={1024 * 1024 * 5}
            upload={uploadOptions}
          />
        </div>
        <div>
          <Button onClick={this.handleBtnNext}>Next</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PhotosPage);
