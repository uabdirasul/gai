import React, { Component } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
