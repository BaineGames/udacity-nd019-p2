import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authentication";

class UserCard extends Component {

    loginUser = (e, id) => {
        e.preventDefault();
        console.log(id);
        const { dispatch } = this.props;
        dispatch(loginUser(id));
    }

    render() {
        const { user } = this.props;

        
        return (
            <div className="userCard" onClick={(e) => this.loginUser(e, user.id)}>
                <img alt={user.name} src={user.avatarURL} width="45px"/>
                {user.name}
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }){
    const userInfo = users[id];
    return {
        user: userInfo
    }
}

export default connect(mapStateToProps)(UserCard);