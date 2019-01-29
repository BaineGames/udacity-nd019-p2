import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import QuestionDetail from "./QuestionDetail";

class QuestionCard extends Component {


    render() {
        const { question } = this.props;        
        return (
            <Link to={"/questions/" + question.id}>
            <div className="questionCard" >
                Would you rather {question.optionOne.text} OR {question.optionTwo.text}
            </div>
            </Link>
        )
    }
}

function mapStateToProps({ questions }, { id }){
    const questionInfo = questions[id];
    return {
        question: questionInfo
    }
}

export default connect(mapStateToProps)(QuestionCard);