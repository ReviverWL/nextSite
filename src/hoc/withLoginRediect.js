import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { isAuthUser } from '../redux/selectors'

let mapStateToProps = (state)=>({isAuthUser: isAuthUser(state)})

export const withLoginRedirect = (Component) =>{
    const RedirectComponent =({isAuthUser, ...props})=> {
            if(!isAuthUser) return <Redirect to='/authentification' />
            return <Component {...props} />
    }
    return connect(mapStateToProps)(RedirectComponent)
}