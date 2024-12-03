import React from "react";

const imgStyle = {
  height: 400,
  width: "100%",
};
const Person = (props) => {
  return (
    <div
      style={{
        width: "400px",
        border: "1px solid red",
        borderRadius: "10px",
      }}
    >
      <img src={props.image} style={imgStyle} />
      <h1>{props.name}</h1>
    </div>
  );
};

export default Person;
