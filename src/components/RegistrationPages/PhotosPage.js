import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";

class PhotosPage extends Component {
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
          <Button>Next</Button>
        </div>
      </div>
    );
  }
}

export default PhotosPage;
