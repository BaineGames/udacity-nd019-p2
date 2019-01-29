import React, { Component } from "react";
import { connect } from "react-redux";

class AnswerStats extends Component {


    render() {
        const { question, users, opt } = this.props;    

        let userCount = Object.keys(users).length;
        let totalVotes = question[opt].votes.length;
        let pctVoted = (totalVotes === 0 ? 0 : (totalVotes / userCount).toFixed(2) * 100);

        return (
            <p>{`${totalVotes} total votes | ${pctVoted}% of users picked this`}</p>
        )
    }
}

function mapStateToProps({ questions, users }, { id, opt }){
    const questionInfo = questions[id];
    return {
        question: questionInfo,
        users: users,
        opt: opt
    }
}

export default connect(mapStateToProps)(AnswerStats);