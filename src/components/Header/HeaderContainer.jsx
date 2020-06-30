import React from 'react';
import { connect } from 'react-redux';
import {logoutFromSite} from '../../redux/auth-reduser'
import Header from './Header';
import { isAuthUser } from '../../redux/selectors';

const HeaderContainer = ({logoutFromSite, email, authLogin, isAuthUser})=> {
    return <Header logout={logoutFromSite} email={email} authLogin={authLogin} isAuthUser={isAuthUser}/>
}

const mapStateToProps=(state)=>{
    return{
        authLogin: state.auth.authLogin,
        email: state.auth.email,
        isAuthUser: isAuthUser(state),
    }
}

export default connect(mapStateToProps, {logoutFromSite})(HeaderContainer)