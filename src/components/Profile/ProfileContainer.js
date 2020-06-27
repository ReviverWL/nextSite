import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {withLoginRedirect} from './../../hoc/withLoginRediect'
import { setUserData, getUserStatus, setNewStatus, addPost} from '../../redux/profile-reduser'
import Preloader from '../../utility_components/Preloader'
import { withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    componentDidMount(){
        debugger
        let userId
        if(!this.props.match.params.userId){
            userId = this.props.userId
            if(!userId){
                this.props.history.push('/authentification' )
            }
        }
        else{
            userId = this.props.match.params.userId
        }
        // let userId = !this.props.match.params.userId ? (this.props.userId?this.props.userId:<Redirect/> ): this.props.match.params.userId
        this.props.getUserStatus(userId)
        this.props.setUserData(userId)
    }

    render(){
            return<>{this.props.isFetch ? <Preloader/>:<Profile {...this.props}/>} </>
    }
}

const mapStateToProps=(state)=>{
    return{
        profilePage: state.profilePage,
        isFetch: state.usersPage.isFetch,
        userId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {setUserData,getUserStatus,setNewStatus,addPost}),
    withRouter,
    // withLoginRedirect,
)(ProfileContainer)