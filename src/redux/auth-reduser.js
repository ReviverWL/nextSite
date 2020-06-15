import { fetchStatus } from './users-reduser'
import {authDAL} from '../api/api'

const SET_CURRENT_USER = 'SET_CURRENT_USER'

let initialState = {
    id:null,
    email:null,
    login:null,
    authStatus: false
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                ...action.authUserData,
                authStatus: true
            }
        default:
            return state
    }
}

export const setCurrentUser = (id, email, login)=>{
    return{type: SET_CURRENT_USER, authUserData:{id, email, login}}
}

export const getConfirmedUserData = ()=>{
    return (dispatch) =>{
        dispatch(fetchStatus(true))
        authDAL.confirmedUserData()
        .then(data=>{
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setCurrentUser(id, email, login))
            }
            dispatch(fetchStatus(false))
        })}
}

export default authReduser