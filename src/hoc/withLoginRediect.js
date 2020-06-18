import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'

let mapStateToProps = (state)=>({authStatus: state.auth.authStatus})

export const withLoginRedirect = (Component) =>{
    class RedirectComponent extends React.Component {
        render(){
            if(!this.props.authStatus) return <Redirect to='/authentification' />
            return <Component {...this.props} />
        }
    }
    
    return connect(mapStateToProps)(RedirectComponent)
}