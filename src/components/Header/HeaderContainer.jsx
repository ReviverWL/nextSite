import React from 'react';
import { connect } from 'react-redux';
import {getConfirmedUserData,logoutFromSite} from '../../redux/auth-reduser'
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.getConfirmedUserData()
    }

    render(){
    return <Header logout={this.props.logoutFromSite} email={this.props.email} login={this.props.login} authStatus={this.props.authStatus}/>
    }
};

const mapStateToProps=(state)=>{
    return{
        login: state.auth.login,
        email: state.auth.email,
        authStatus: state.auth.authStatus,
    }
}

export default connect(mapStateToProps, {getConfirmedUserData, logoutFromSite})(HeaderContainer)