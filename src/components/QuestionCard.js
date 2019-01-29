import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionCard extends Component {


    render() {
        const { question } = this.props;

        console.log(question);

        
        return (
            <div className="questionCard" >
                Would you rather {question.optionOne.text} OR {question.optionTwo.text}
            </div>
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