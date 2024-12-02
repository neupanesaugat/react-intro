import React from "react";

const ImageStyle = {
  objectFit: "cover",
  height: "576px",
  width: "1015px",
};

const Image = () => {
  return (
    <div>
      <img
        src="https://www.wildernessexcursion.com/uploads/img/shey-phoksundo-lake.jpg"
        alt="Shey Phoksundo"
        style={ImageStyle}
      ></img>
    </div>
  );
};

export default Image;
