import React from "react";
import logo from "./logos.jpeg";
function App(props) {
  //props is an object with values passed in index.js for this example only.
  return (
    <div>
      <h1>
        Find below logo, with name {props.name} and age {props.age}{" "}
      </h1>
      <img src={logo} width="500" height="300" alt="Dummy logo" />
    </div>
  );
}
export default App;
