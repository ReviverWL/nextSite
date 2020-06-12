import React from 'react'
import { connect } from "react-redux"
import Profile from "./Profile"
import * as axios from 'axios'
import {textflow, addPost, profileInfo} from '../../redux/profile-reduser'
import {fetchStatus} from '../../redux/users-reduser'
import Preloader from '../../utility_components/Preloader'
import { withRouter } from 'react-router-dom'


class ProfileCont extends React.Component {
    componentDidMount(){
        // debugger
        let userId = !this.props.match.params.userId ? 8318: this.props.match.params.userId
        this.props.fetchStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response=>{
            this.props.profileInfo(response.data)
            this.props.fetchStatus(false)
        })
    }

    render(){
            return<>{this.props.isFetch ? <Preloader/>:<Profile {...this.props}/>} </>
    }
}

const mapStateToProps=(state)=>{
    return{
        profilePage: state.profilePage,
        isFetch: state.usersPage.isFetch
    }
}

const ProfileURL = withRouter(ProfileCont)
const ProfileContainer = connect(mapStateToProps, {addPost, textflow, profileInfo, fetchStatus})(ProfileURL)
export default ProfileContainer