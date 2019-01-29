import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionDetail extends Component {

    render() {
        const { question } = this.props;
        console.log(this.props);
        
        return (
            <div>test</div>
        )
    }
}

function mapStateToProps({ questions }, { id }){
    const questionDetail = questions[id];
    console.log("QD:",questionDetail);
    return {question: questionDetail
    }
}

export default connect(mapStateToProps)(QuestionDetail);