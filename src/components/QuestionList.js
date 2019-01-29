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
        console.log(this.props);
        return (    
            <Fragment>
            Show Answered: <input type="checkbox" onChange={(e) => this.handleCheckbox(e)}/>
            <ul className="questionList">
            {   
                (this.state.AnsweredVisible ?
                    userAnswered.map((questionId) =>(
                        <li key={questionId}><QuestionCard id={questionId} /></li>
                    ))
                :
                userUnanswered.map((questionId) =>(
                    <li key={questionId}><QuestionCard id={questionId} /></li>
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

        console.log(q);
        let opt1 = questions[q].optionOne.votes.indexOf(authentication) !== -1;
        let opt2 = questions[q].optionTwo.votes.indexOf(authentication) !== -1;
        let answered = opt1 || opt2;

        if(answered){
            userAnswered.push(q);
        }else{
            userUnanswered.push(q);
        }
    }
    return {userAnswered: userAnswered,
    userUnanswered: userUnanswered};
    }

export default connect(mapStateToProps)(QuestionList);