import React, { useState } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {withLoginRedirect} from './../../hoc/withLoginRediect'
import { setUserData, getUserStatus, setNewStatus, addPost, updateUserPhoto} from '../../redux/profile-reduser'
import Preloader from '../../utility_components/Preloader'
import { withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { useEffect } from 'react'

const ProfileContainer =({match, getUserStatus, setUserData, userId, history, isFetch, ...props})=> {
    const[abilityToChangeProfile, setAbilityToChangeProfile]= useState(false)
    useEffect(()=>{
        if (match.params.userId == userId || !match.params.userId) {
                if (!userId) {
                    history.push('/authentification')
                }
            setUser(userId)
            setAbilityToChangeProfile(true)
        }
        else {
            setUser(match.params.userId)
            setAbilityToChangeProfile(false)
        }
    }, [match.params.userId, userId, history])

    const setUser = (id)=>{
        getUserStatus(id)
        setUserData(id)
    }

    return<>{isFetch ? <Preloader/>:<Profile {...props} abilityToChangeProfile={abilityToChangeProfile}/>} </>
}

const mapStateToProps=(state)=>{
    return{
        profilePage: state.profilePage,
        isFetch: state.usersPage.isFetch,
        userId: state.auth.id,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {setUserData, getUserStatus, setNewStatus, addPost, updateUserPhoto}),
    withRouter,
    // withLoginRedirect,
)(ProfileContainer)