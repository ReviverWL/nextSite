import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { authStatus } from '../redux/selectors'

let mapStateToProps = (state)=>({authStatus: authStatus(state)})

export const withLoginRedirect = (Component) =>{
    class RedirectComponent extends React.Component {
        render(){
            if(!this.props.authStatus) return <Redirect to='/authentification' />
            return <Component {...this.props} />
        }
    }
    
    return connect(mapStateToProps)(RedirectComponent)
}