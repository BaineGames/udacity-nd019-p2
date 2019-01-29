import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionCard from "./QuestionCard";

class QuestionList extends Component {
    
    render() {
        const { questionIds } = this.props;
        console.log(questionIds);
        console.log(this.props);
        return (
            <ul className="questionList">
            {this.props.questionIds.map((questionId) =>(
                        <li><QuestionCard id={questionId} /></li>
                    ))}</ul>
        )
    }
}

function mapStateToProps({ questions }) {
    return {questionIds: Object.keys(questions)};
}

export default connect(mapStateToProps)(QuestionList);