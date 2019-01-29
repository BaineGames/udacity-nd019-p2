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
        return (
            <ul className="menu" >
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ask">
                        Ask
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard">
                        Leaderboard
                    </NavLink>
                </li>
                <li onClick={(e) => this.loginUser()}>
                    Logout
                </li>
            </ul>
        )
    }
}

function mapStateToProps({ authentication}){
    return {
        authentication
    }
}

export default connect(mapStateToProps)(Menu);