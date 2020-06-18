import { fetchStatus } from './users-reduser'
import {authDAL} from '../api/api'

const SET_CURRENT_USER = 'SET_CURRENT_USER'

let initialState = {
    id:null,
    email:null,
    login:null,
    authStatus: false,
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                ...action.authUserData
            }
        default:
            return state
    }
}

export const setCurrentUser = (id, email, login, authStatus)=>{
    return{type: SET_CURRENT_USER, authUserData:{id, email, login, authStatus}}
}

export const getConfirmedUserData = ()=>{
    return (dispatch) =>{
        dispatch(fetchStatus(true))
        authDAL.confirmedUserData()
        .then(data=>{
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setCurrentUser(id, email, login, true))
            }
            dispatch(fetchStatus(false))
        })}
}

export const loginOnSite = (email, password, rememberMe)=>{
    return(dispatch)=>{
        authDAL.authentication(email, password, rememberMe)
        .then(data=>{
            if(data.resultCode ===  0){
            dispatch(getConfirmedUserData())
        }})
    }
}

export const logoutFromSite = ()=>{
    return(dispatch)=>{
    authDAL.logout()
    .then(data=>{
        if(data.resultCode === 0){
            dispatch(setCurrentUser(null, null, null, false))
        }})
    }
}

export default authReduser