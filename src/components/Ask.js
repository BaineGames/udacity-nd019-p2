import React, { Component } from "react";
import { connect } from "react-redux";
import { addQuestion } from "../actions/question";
import { Redirect } from "react-router-dom";

class Ask extends Component {
    state = {
        optionOne : "",
        optionTwo : "",
        redirectOut : false
    }

    askNewQuestion = (e) => {
        e.preventDefault();
        const { dispatch, auth } = this.props;
        const { optionOne, optionTwo } = this.state;
        dispatch(addQuestion({optionOne,optionTwo, auth}));
        this.setState(() =>({
            optionOne : "",
            optionTwo : "",
            redirectOut : true
        }));
    }

    saveOptionToState = (e, opt) => {
        const optionValue = e.target.value;
        this.setState(()=>({
            [opt] : optionValue,
            redirectOut : false
        }));
    }


    render() {

        const { redirectOut } = this.props;
        
        if(redirectOut){return <Redirect to="/"/>}
        return (
            <div>
                <h3>Would you Rather...</h3>
                <form onSubmit={this.askNewQuestion}>
                <input type="text" placeholder="do this thing"
                onChange={(e) => this.saveOptionToState(e,"optionOne")}></input>
                <p> ---- OR ---- </p>
                <input type="text" placeholder="do this thing"
                onChange={(e) => this.saveOptionToState(e,"optionTwo")}></input>
                <p><button type="submit">Ask</button></p>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authentication }){

    return {
        questions: questions,
        auth: authentication
    }
}

export default connect(mapStateToProps)(Ask);