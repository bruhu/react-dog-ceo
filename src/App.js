import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./store";
// import React bindings for Redux
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        who dis
        <header className="App-header">
          <img src={this.props.dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Dog Saga</h1>
          <p className="App-intro">Replace the React icon with a Dog CEO!</p>
          <button onClick={this.props.onRequestDog}>Request a dog</button>
        </header>
      </div>
    );
  }
}

// will make things from the store available:
const mapStateToProps = state => {
  return {
    fetch: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
