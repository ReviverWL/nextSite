import React from 'react'
import LoginForm from './LoginForm'
import { loginOnSite } from '../../redux/auth-reduser'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Login = (props) =>{
    let onLogin = (userData)=>{
        props.loginOnSite(userData.email, userData.password, userData.rememberMe, userData.checkCaptcha)
    }
    return props.isAuthUser
        ?<Redirect to='/profile'/>
        : <div>
        <h2>Login</h2>
        <LoginForm captcha={props.captcha} onSubmit={onLogin}/>
        </div>
    
}

const mapStateToProps = (state)=>{
    return {
        isAuthUser: state.auth.isAuthUser,
        captcha: state.auth.captcha
    }
}
export default compose(
    connect(mapStateToProps, {loginOnSite}),
) (Login)