import React from "react";
import ReactDOM from "react-dom";
import Pokedex from "./Pokedex";

class App extends React.Component {
  render() {
    return <Pokedex/>
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
