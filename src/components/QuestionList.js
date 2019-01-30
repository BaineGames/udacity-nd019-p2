import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import QuestionCard from "./QuestionCard";

class QuestionList extends Component {

    state = {
        AnsweredVisible : false
    };

    handleCheckbox = (e) =>{
        this.setState(() => ({
            AnsweredVisible : !this.state.AnsweredVisible
        }));
    }
    
    render() {
        const { userAnswered, userUnanswered } = this.props;
        return (    
            <Fragment>
            Show Answered: <input type="checkbox" onChange={(e) => this.handleCheckbox(e)}/>
            <ul className="questionList">
            {   
                (this.state.AnsweredVisible ?
                    userAnswered.map((questionId) =>(
                        <li key={questionId.id}><QuestionCard id={questionId.id} /></li>
                    ))
                :
                userUnanswered.map((questionId) =>(
                    <li key={questionId.id}><QuestionCard id={questionId.id} /></li>
                ))
                )
                
            }
            </ul>
            </Fragment>
        )
    }
}

function mapStateToProps({ questions, authentication }) {
    const userAnswered = [];
    const userUnanswered = [];

    for(let q in questions){

        let opt1 = questions[q].optionOne.votes.indexOf(authentication) !== -1;
        let opt2 = questions[q].optionTwo.votes.indexOf(authentication) !== -1;
        let answered = opt1 || opt2;

        if(answered){
            userAnswered.push({ id: q, time: questions[q].timestamp});
        }else{
            userUnanswered.push({ id: q, time: questions[q].timestamp});
        }
    }
    console.log("ANSWERD", userUnanswered);
    userAnswered.sort(function(a,b){ return b.time - a.time });
    userUnanswered.sort(function(a,b){ return b.time - a.time });
    return {userAnswered: userAnswered,
    userUnanswered: userUnanswered};
    }

export default connect(mapStateToProps)(QuestionList);