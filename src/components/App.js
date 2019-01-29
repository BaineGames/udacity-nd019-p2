import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleLoadData } from "../actions/shared";

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleLoadData());

  }
  render() {
    return (
      <div className="App"></div>
    );
  }
}

export default connect()(App);
