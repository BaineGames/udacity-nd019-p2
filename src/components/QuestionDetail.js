import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { questionAnswered } from "../actions/question";

import AnswerStats from "./AnswerStats";

class QuestionDetail extends Component {

    answerQuestion = (e, answer) => {
        e.preventDefault();
        const { dispatch, question, auth } = this.props;
        dispatch(questionAnswered({ authedUser: auth, qid: question.id, answer: answer}));
    }

    render() {
        const { question, auth, users } = this.props;

        if(question){
            const author = question.author;
            const opt1 = question.optionOne;
            const opt2 = question.optionTwo;
    
            const userAnswerOpt1 = (opt1.votes.indexOf(auth) !== -1) ? true : false;
            const userAnswerOpt2 = (opt2.votes.indexOf(auth) !== -1) ? true : false;
    
            const userAnswerAny = userAnswerOpt1 || userAnswerOpt2;
    
            return (
                <Fragment>
                <div>Would you rather:</div>
                <button onClick={(e) => this.answerQuestion(e,"optionOne")} className={(opt1.votes.indexOf(auth) !== -1) ? "myAnswer" : null}>{opt1.text}</button>
                {(userAnswerAny) ?
                <AnswerStats id={question.id} opt="optionOne"/> : null}
                <p> -- OR -- </p>
                <button onClick={(e) => this.answerQuestion(e,"optionTwo")} className={(opt2.votes.indexOf(auth) !== -1) ? "myAnswer" : null}>{opt2.text}</button>
                {(userAnswerAny) ?
                <AnswerStats id={question.id} opt="optionTwo"/> : null}
                <div>Asked by {author}</div>
                <img alt={users[author].name} src={users[author].avatarURL} width="45px" />
                </Fragment>
            )
        }else{
            return <Redirect to="/error"/>
        }
        
        
    }
}

function mapStateToProps({ questions, authentication, users }, props){
    const { id } = props.match.params;
    console.log("QD:",id);
    return {question: questions[id],
        auth: authentication,
        users: users
    }
}

export default connect(mapStateToProps)(QuestionDetail);