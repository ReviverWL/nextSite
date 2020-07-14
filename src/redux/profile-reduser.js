import {profileDAL} from '../api/api'
import {fetchStatus} from './users-reduser'

const ADD_POST = 'profile/ADD_POST'
const PROFILE_CHANGE = 'profile/PROFILE_CHANGE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_PHOTO = 'profile/SET_PHOTO'

let initialState = {

    posts: [
        { id: 1, text: '初音ミク', likes: 39 },
        { id: 2, text: 'azazazazaaza', likes: 10 },
        { id: 3, text: 'nyao', likes: 1024 },
    ],
    profileInfo: null,
    status:'',
}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = { id: state.posts.length + 1, text: action.postText, likes: 0 };
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts, newPost]
            return stateCopy
        }
        case PROFILE_CHANGE:{
            let stateCopy = { ...state }
            stateCopy.profileInfo = action.info
            return stateCopy
        }

        case SET_PHOTO:{
            // let stateCopy = { ...state }
            // stateCopy.photo = action.photo
            return { ...state, profileInfo:{...profileInfo, photos: action.photos}}
        }
        case SET_STATUS:{
            return{
                ...state,
                status : action.status}
        }
        default:
            return state
    }
}

export const addPost = (postText) => ({ type: ADD_POST, postText })
const profileInfo = (info) => ({ type: PROFILE_CHANGE, info })
export const setStatus = (status) => ({type: SET_STATUS, status})
const setUserPhoto = (photos)=>({type:SET_PHOTO, photos})

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

export const updateUserPhoto = (photoFile) => {
    return async (dispatch) => {
        const data = await profileDAL.putUserPhoto(photoFile)
        if (data.resultCode === 0) {
            dispatch(setUserPhoto(data.data.photos))
        }
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