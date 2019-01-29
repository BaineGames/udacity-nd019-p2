import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleLoadData } from "../actions/shared";

import SelectUser from "./SelectUser";
import QuestionList from "./QuestionList";

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleLoadData());
  }

  render() {
    const { auth } = this.props;

    return (
      <div className="App">
        {auth ?
        <QuestionList />
        :
        <SelectUser />
        }

      </div>
    );
  }
}

function mapStateToProps({ authentication }){
  return {auth: authentication};
}

export default connect(mapStateToProps)(App);
