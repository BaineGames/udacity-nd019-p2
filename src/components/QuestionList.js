import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import QuestionCard from "./QuestionCard";

class QuestionList extends Component {

    state = {
        unAnsweredVisible : false
    };

    handleCheckbox = (e) =>{
        console.log(this.props);
        this.setState(() => ({
            unAnsweredVisible : !this.state.unAnsweredVisible
        }));
    
    }
    
    render() {
        const { userAnswered, userUnanswered } = this.props;
        console.log(this.props);
        return (    
            <Fragment>
            Show Unanswered: <input type="checkbox" value="false" onChange={(e) => this.handleCheckbox(e)}/>
            <ul className="questionList">
            {   
                (this.state.unAnsweredVisible ?
                    userUnanswered.map((questionId) =>(
                        <li key={questionId}><QuestionCard id={questionId} /></li>
                    ))
                :
                userAnswered.map((questionId) =>(
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