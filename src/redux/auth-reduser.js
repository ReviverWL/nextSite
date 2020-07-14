import { fetchStatus } from './users-reduser'
import {authDAL} from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_CURRENT_USER = 'auth/SET_CURRENT_USER'
const CAPTCHA = 'auth/CAPTCHA'

let initialState = {
    id:null,
    email:null,
    authLogin:null,
    isAuthUser: false,
    captcha: ''
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                ...action.authUserData
            }
        case CAPTCHA:{
            return{
                ...state,
                captcha: action.captcha
            }

        }
        default:
            return state
    }
}

export const setCurrentUser = (id, email, authLogin, isAuthUser)=>{
    return{type: SET_CURRENT_USER, authUserData:{id, email, authLogin, isAuthUser}}
}
const setCaptcha = (captcha)=>{
    return{type: CAPTCHA, captcha}
}

export const getConfirmedUserData = () => {
    return (dispatch) => {
        dispatch(fetchStatus(true))
        return (authDAL.confirmedUserData()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch(setCurrentUser(id, email, login, true))
                }
                dispatch(fetchStatus(false))
            })
        )
    }
}

export const loginOnSite = (email, password, rememberMe, captchaValue)=>{
    return(dispatch)=>{
        authDAL.authentication(email, password, rememberMe, captchaValue)
        .then(data=>{
            if(data.resultCode ===  0){
            dispatch(getConfirmedUserData())
            }
            else if(data.resultCode === 1){
                dispatch(stopSubmit('Login', {_error: data.messages}))
            }
            else if(data.resultCode === 10){
                dispatch(stopSubmit('Login', {_error: data.messages}))
                dispatch(captcha())
            }
            else{
                return data.messages
            }
        })
    }
}

export const captcha = ()=>{
    return(dispatch)=>{
        authDAL.getCaptcha()
        .then(data=>{
            dispatch(setCaptcha(data.url))
        })
    }
}

export const logoutFromSite = ()=>{
    return(dispatch)=>{
    authDAL.logout()
    .then(data=>{
        if(data.resultCode === 0){
            dispatch(setCurrentUser(null, null, null, false))
        }
    })
    }
}

export default authReduser