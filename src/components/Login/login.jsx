import React from 'react'
import LoginForm from './LoginForm'
import { loginOnSite } from '../../redux/auth-reduser'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Login = (props) =>{
    let onLogin = (userData)=>{
        props.loginOnSite(userData.email, userData.password, userData.rememberMe)
    }
    return props.authStatus
        ?<Redirect to='/profile'/>
        : <div>
        <h2>Login</h2>
        <LoginForm onSubmit={onLogin}/>
        </div>
    
}

const mapStateToProps = (state)=>{
    return {
        authStatus: state.auth.authStatus
    }
}
export default compose(
    connect(mapStateToProps, {loginOnSite}),
) (Login)