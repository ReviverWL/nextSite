import React from 'react'
import { connect } from "react-redux"
import Profile from "./Profile"
import { setUserData} from '../../redux/profile-reduser'
import Preloader from '../../utility_components/Preloader'
import { withRouter } from 'react-router-dom'


class ProfileCont extends React.Component {
    componentDidMount(){
        let userId = !this.props.match.params.userId ? 8318: this.props.match.params.userId
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

const ProfileURL = withRouter(ProfileCont)
const ProfileContainer = connect(mapStateToProps, {setUserData})(ProfileURL)
export default ProfileContainer