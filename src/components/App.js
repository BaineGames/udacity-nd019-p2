import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleLoadData } from "../actions/shared";

import SelectUser from "./SelectUser";

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleLoadData());

  }
  render() {
    return (
      <div className="App"><SelectUser /></div>
    );
  }
}

export default connect()(App);
