import React from "react";

const Preview = ({ imageSRC }) => {
  return (
    <div className="previewRow">
      <img
        src={imageSRC ? URL.createObjectURL(imageSRC) : "./default.png"}
        className="previewImage"
      />
    </div>
  );
};

export default Preview;
