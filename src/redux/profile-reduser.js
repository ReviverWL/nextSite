import {profileDAL} from '../api/api'
import {fetchStatus} from './users-reduser'

const ADD_POST = 'ADD-POST'
const TEXTFLOW_CHANGE = 'TEXTFLOW-CHANGE'
const PROFILE_CHANGE = 'PROFILE_CHANGE'
const SET_STATUS = 'SET_STATUS'

let initialState = {

    posts: [
        { id: 1, text: '初音ミク', likes: 39 },
        { id: 2, text: 'azazazazaaza', likes: 10 },
        { id: 3, text: 'nyao', likes: 1024 },
    ],
    textflowPost: '',
    profileInfo: null,
    status:''
}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = { id: state.posts.length + 1, text: state.textflowPost, likes: 0 }
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.textflowPost = ''
            return stateCopy
        }
        case TEXTFLOW_CHANGE:{
            let stateCopy = { ...state }
            stateCopy.textflowPost = action.text
            return stateCopy
        }
        case PROFILE_CHANGE:{
            let stateCopy = { ...state }
            stateCopy.profileInfo = action.info
            return stateCopy
        }
        case SET_STATUS:{
            return{...state,status : action.status}
        }
        default:
            return state
    }
}

export const addPost = () => ({ type: ADD_POST })
export const textflow = (text) => ({ type: TEXTFLOW_CHANGE, text })
export const profileInfo = (info) => ({ type: PROFILE_CHANGE, info })
export const setStatus = (status) => ({type: SET_STATUS, status})

export const setUserData = (userId)=>{
    return (dispatch)=>{
        dispatch(fetchStatus(true))
        profileDAL.getUsersData(userId).then(data=>{
            dispatch(profileInfo(data))
            dispatch(fetchStatus(false))
        })
    }
}
export const getUserStatus = (userId)=>{
    return(dispatch)=>{
        profileDAL.getUserStatus(userId).then(data=>{
            dispatch(setStatus(data))
        })
    }
}
export const setNewStatus = (status)=>{
    return (dispatch)=>{
        profileDAL.putUserStatus(status).then(data=>{
            if(data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReduser