import React from 'react'
import LoginForm from './LoginForm'
import { loginOnSite } from '../../redux/auth-reduser'
import { compose } from 'redux'
import { connect } from 'react-redux'

const Login = (props) =>{
    let onLogin = (userData)=>{
        props.loginOnSite(userData.email, userData.password, userData.rememberMe)
    }
    return(
        <div>
        <h2>Login</h2>
        <LoginForm onSubmit={onLogin}/>
        </div>
    )
}
export default compose(
    connect(null, {loginOnSite}),
) (Login)