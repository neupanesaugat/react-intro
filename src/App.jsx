import React from "react";

//? conditional rendering
// odd even

// const App = () => {
//   let num = 50;
//   let remainder = num % 2;

//   if (remainder === 0) {
//     return <p>{num} is an even number</p>;
//   }
//   return <p>{num} is an odd number</p>;
// };

//? Another way
// const App = () => {
//   let num = 12;
//   let remainder = num % 2;
//   return (
//     <p>
//       {num} is {remainder === 0 ? "even" : "odd"}
//     </p>
//   ); //? {} because using javascript and $ is ternary operator
// };

//? Another example
const App = () => {
  let isLoggedIn = true;
  return <p>{isLoggedIn ? "Logged In" : "Logged Out"}</p>;
};

export default App;
