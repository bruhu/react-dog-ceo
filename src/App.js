import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./store";

class App extends Component {
  render() {
    return <div />;
  }
}

// will make things from the store available:
const mapStateToProps = state => {
  return {
    fetch: state.fetching,
    dog: store.dog,
    error: store.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
