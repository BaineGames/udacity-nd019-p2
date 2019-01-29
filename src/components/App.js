import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleLoadData } from "../actions/shared";

import SelectUser from "./SelectUser";
import QuestionList from "./QuestionList";
import Menu from "./Menu";
import Logout from "./Logout";
import QuestionDetail from "./QuestionDetail";
import Ask from "./Ask";
import Leaderboard from "./Leaderboard";

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleLoadData());
  }

  render() {
    const { auth } = this.props;

    return (
      <Router>
        <Fragment>
          {auth ?
          <Fragment>
          <Menu />
          <div className="App">
            <Route path="/login" component={SelectUser}/>
            <Route path="/" component={QuestionList} exact/>
            <Route path="/ask" component={Ask}/>
            <Route path="/leaderboard" component={Leaderboard}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/questions/:id" component={QuestionDetail}/>
          </div>
          </Fragment>
        : 
        <SelectUser />
          }
        </Fragment>
      </Router>
      
    );
  }
}

function mapStateToProps({ authentication }){
  return {auth: authentication};
}

export default connect(mapStateToProps)(App);
