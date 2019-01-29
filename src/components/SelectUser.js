import React, { Component } from "react";
import { connect } from "react-redux";

class SelectUser extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Users</h3>
                <ul>
                    {this.props.userIds.map((userId) =>(
                        <li key={userId}>
                            {userId}
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