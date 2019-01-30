import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class QuestionCard extends Component {


    render() {
        const { question, auth } = this.props;    
        console.log(this.props);

        const userAnswerOpt1 = (question.optionOne.votes.indexOf(auth) !== -1) ? true : false;
        const userAnswerOpt2 = (question.optionTwo.votes.indexOf(auth) !== -1) ? true : false;

        const userAnswerAny = userAnswerOpt1 || userAnswerOpt2;

        return (
            <Link to={"/questions/" + question.id}>
            <div className={"questionCard " + (userAnswerAny ? "answered" : "unanswered")} >
                Would you rather {question.optionOne.text} OR {question.optionTwo.text}
            </div>
            </Link>
        )
    }
}

function mapStateToProps({ questions, authentication }, { id }){
    const questionInfo = questions[id];
    return {
        question: questionInfo,
        auth: authentication
    }
}

export default connect(mapStateToProps)(QuestionCard);