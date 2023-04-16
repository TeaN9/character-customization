import React from "react";

function Image({ source, zIndex }) {
  return <img src={source} alt="" style={{ zIndex: zIndex }} />;
}

export default Image;
