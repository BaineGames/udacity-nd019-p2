import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { loginUser } from "../actions/authentication";

class Menu extends Component {

    loginUser = () => {
        const { dispatch } = this.props;
        dispatch(loginUser(null));
    }

    render() { 

        const { auth } = this.props;

        return (
            <ul className="menu" >
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add">
                        Ask
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard">
                        Leaderboard
                    </NavLink>
                </li>
                <li onClick={(e) => this.loginUser()}>
                    Logout {auth}
                </li>
            </ul>
        )
    }
}

function mapStateToProps({ authentication}){
    return {
        auth: authentication
    }
}

export default connect(mapStateToProps)(Menu);