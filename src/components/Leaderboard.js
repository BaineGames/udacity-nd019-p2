import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {


    render() {
        const { users, leaderboard } = this.props;
        console.log(leaderboard);
        return (
            <ol>
           {leaderboard.map(leader => <li key={leader.user.id}> { leader.user.name} {leader.score} {Object.keys(leader.user.answers).length} {Object.keys(leader.user.questions).length}
           <img src={leader.user.avatarURL} width="45px" /></li>)} 
       </ol>
        )
    }
}

function mapStateToProps({ users }){
    
    const leaderboardData = [];
    for(let user in users){
        console.log(user);
        let answers = Object.keys(users[user].answers).length;
        let questions = Object.keys(users[user].questions).length;
        let score = answers + questions;

        leaderboardData.push({user: users[user], score: score});

        leaderboardData.sort(function(a,b){return b.score - a.score});
    }

    return {
        users: users,
        leaderboard: leaderboardData
    }
}

export default connect(mapStateToProps)(Leaderboard);