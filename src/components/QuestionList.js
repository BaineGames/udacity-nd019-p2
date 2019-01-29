import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionCard from "./QuestionCard";

class QuestionList extends Component {
    
    render() {
        const { questionIds } = this.props;
        return (
            <ul className="questionList">
            {questionIds.map((questionId) =>(
                        <li key={questionId}><QuestionCard id={questionId} /></li>
                    ))}</ul>
        )
    }
}

function mapStateToProps({ questions }) {
    
    return {questionIds: Object.keys(questions)};
}

export default connect(mapStateToProps)(QuestionList);