import React from 'react';
import { connect } from 'react-redux';
import {logoutFromSite} from '../../redux/auth-reduser'
import Header from './Header';

class HeaderContainer extends React.Component {
    render(){
    return <Header logout={this.props.logoutFromSite} email={this.props.email} login={this.props.login} authStatus={this.props.authStatus}/>
    }
};

const mapStateToProps=(state)=>{
    return{
        login: state.auth.login,
        email: state.auth.email,
        authStatus: state.auth.authStatus,
        // initialisation: state.app
    }
}

export default connect(mapStateToProps, {logoutFromSite})(HeaderContainer)