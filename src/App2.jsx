import React from "react";

//? always wrap elements in react fragment which is equivalent to <>
//? because function always return one thing at a time
const App2 = () => {
  return (
    <>
      <div>A</div>
      <div>B</div>
    </>
  );
};

export default App2;
