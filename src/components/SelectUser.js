import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

class SelectUser extends Component {
    render() {
        return (
            <div>
                <h3>Select User to Login As</h3>
                <ul>
                    {this.props.userIds.map((userId) =>(
                        <li key={userId}>
                            <UserCard id={userId} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {userIds: Object.keys(users)};
}

export default connect(mapStateToProps)(SelectUser);