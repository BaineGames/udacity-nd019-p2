import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class QuestionDetail extends Component {

    render() {
        const { question, auth } = this.props;
        console.log(question);
        
        const author = question.author;
        const opt1 = question.optionOne;
        const opt2 = question.optionTwo;

        const userAnswerOpt1 = (opt1.votes.indexOf(auth) != -1) ? true : false;
        const userAnswerOpt2 = (opt2.votes.indexOf(auth) != -1) ? true : false;

        const userAnswerAny = userAnswerOpt1 || userAnswerOpt2;

        console.log("answerd at all:", userAnswerAny);

        return (
            <Fragment>
            <div>Would you rather:</div>
            <p>{opt1.text} {(opt1.votes.indexOf(auth) != -1) ? "my answer" : null}</p>
            <p>{opt2.text} {(opt2.votes.indexOf(auth) != -1) ? "my answer" : null}</p>
            <div>Asked by {author}</div>
            </Fragment>
        )
    }
}

function mapStateToProps({ questions, authentication }, props){
    const { id } = props.match.params;
    console.log("QD:",id);
    return {question: questions[id],
        auth: authentication
    }
}

export default connect(mapStateToProps)(QuestionDetail);