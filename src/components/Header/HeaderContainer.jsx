import React from 'react';
import { connect } from 'react-redux';
import {logoutFromSite} from '../../redux/auth-reduser'
import Header from './Header';
import { authStatus } from '../../redux/selectors';

class HeaderContainer extends React.Component {
    render(){
    return <Header logout={this.props.logoutFromSite} email={this.props.email} login={this.props.login} authStatus={this.props.authStatus}/>
    }
};

const mapStateToProps=(state)=>{
    return{
        login: state.auth.login,
        email: state.auth.email,
        authStatus: authStatus(state),
    }
}

export default connect(mapStateToProps, {logoutFromSite})(HeaderContainer)