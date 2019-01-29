import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Menu extends Component {

    render() { 
        return (
            <ul className="menu" >
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>Ask</li>
                <li>Leaderboard</li>
            </ul>
        )
    }
}

export default (Menu);