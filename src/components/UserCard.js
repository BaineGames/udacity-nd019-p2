import React, { Component } from "react";
import { connect } from "react-redux";

class UserCard extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="userCard">
                <img src={user.avatarURL} width="45px"/>
                {user.name}
            </div>
        )
    }
}

function mapStateToProps({ authentication, users, questions}, { id }){
    const userInfo = users[id];
    console.log(userInfo);
    return {
        authentication,
        user: userInfo
    }
}

export default connect(mapStateToProps)(UserCard);