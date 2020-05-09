import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import React from "react";

const MyUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = async ({ meta: { name } }) => {
    const {
      fields,
      uploadUrl,
      fileUrl,
    } = await myApiService.getPresignedUploadParams(name);
    return { fields, meta: { fileUrl }, url: uploadUrl };
  };

  console.log("FIELDS:", fields);
  console.log("UURL:", uploadUrl);
  console.log("FileUrl:", fileUrl);
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
  );
};

export default MyUploader;
