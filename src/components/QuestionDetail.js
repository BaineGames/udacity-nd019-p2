import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import AnswerStats from "./AnswerStats";

class QuestionDetail extends Component {

    render() {
        const { question, auth, users } = this.props;
        
        const author = question.author;
        const opt1 = question.optionOne;
        const opt2 = question.optionTwo;

        const userAnswerOpt1 = (opt1.votes.indexOf(auth) !== -1) ? true : false;
        const userAnswerOpt2 = (opt2.votes.indexOf(auth) !== -1) ? true : false;

        const userAnswerAny = userAnswerOpt1 || userAnswerOpt2;

        return (
            <Fragment>
            <div>Would you rather:</div>
            <p className={(opt1.votes.indexOf(auth) !== -1) ? "myAnswer" : null}>{opt1.text}</p>
            {(userAnswerAny) ?
            <AnswerStats id={question.id} opt="optionOne"/> : null}
            <p className={(opt2.votes.indexOf(auth) !== -1) ? "myAnswer" : null}>{opt2.text}</p>
            {(userAnswerAny) ?
            <AnswerStats id={question.id} opt="optionTwo"/> : null}
            <div>Asked by {author}</div>
            <img alt={users[author].name} src={users[author].avatarURL} width="45px" />
            </Fragment>
        )
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