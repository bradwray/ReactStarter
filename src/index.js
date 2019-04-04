import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter.js";

//this function that returns html (aka a component) is the wrapper for our whole app
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
