import { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authentication";

class Logout extends Component {

    loginUser = () => {
        const { dispatch } = this.props;
        dispatch(loginUser(null));
    }

    componentDidMount(){
        this.loginUser();
      }

    render() {        
        return (null)
    }
}

function mapStateToProps({ authentication, users}, { id }){
    const userInfo = users[id];
    return {
        authentication,
        user: userInfo
    }
}

export default connect(mapStateToProps)(Logout);