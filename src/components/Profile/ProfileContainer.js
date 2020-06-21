import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {withLoginRedirect} from './../../hoc/withLoginRediect'
import { setUserData, getUserStatus, setNewStatus, addPost} from '../../redux/profile-reduser'
import Preloader from '../../utility_components/Preloader'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = !this.props.match.params.userId ? 8318: this.props.match.params.userId
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
    }
}

export default compose(
    connect(mapStateToProps, {setUserData,getUserStatus,setNewStatus,addPost}),
    withRouter,
    withLoginRedirect,
)(ProfileContainer)