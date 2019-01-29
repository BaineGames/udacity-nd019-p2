import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleLoadData } from "../actions/shared";

import SelectUser from "./SelectUser";
import QuestionList from "./QuestionList";
import Menu from "./Menu";

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleLoadData());
  }

  render() {
    const { auth } = this.props;

    return (
      <Router>
        <div className="App">
          {auth ?
          <Fragment>
            <Menu />
            <QuestionList />
          </Fragment>
          :
          <SelectUser />
          }

        </div>



      </Router>
      
    );
  }
}

function mapStateToProps({ authentication }){
  return {auth: authentication};
}

export default connect(mapStateToProps)(App);
