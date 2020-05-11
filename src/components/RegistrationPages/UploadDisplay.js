import React, { Component } from "react";

class UploadDisplay extends Component {
  renderFileUpload = (uploadedFile, i) => {
    const {
      // filename, // s3 filename
      fileUrl, // full s3 url of the file
      file, // file descriptor from the upload
    } = uploadedFile;

    return (
      <div key={i}>
        <img
          src={fileUrl}
          style={{ maxWidth: "200px", maxHeight: "200px" }}
          alt="uploaded"
        />
        <p>{file.name}</p>
      </div>
    );
  };

  render() {
    const { uploadedFiles } = this.props;

    return <div>{uploadedFiles.map(this.renderFileUpload)}</div>;
  }
}

export default UploadDisplay;
