import {usersDAL} from '../api/api'
import {fetchStatus} from './main-reduser'

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const CHANGE_PAGE = 'users/CHANGE_PAGE'
const SET_USERS_COUNT = 'users/SET_USERS_COUNT'
const FOLLOW_UNFOLLOW_PROGRESS = 'users/FOLLOW_UNFOLLOW_PROGRESS'

let initialState={
    users:[
        // {id: 1, name: 'Miku', lastName: 'Hatsune', follower:true , status: 'Care about Saya', avatar: 'https://99px.ru/sstorage/53/2014/06/mid_103620_9079.jpg', dislocation:{country: '日本',　city: '大阪市'}},
        // {id: 2, name: 'Сайя', lastName: 'Скарлет', follower:true , status: 'Ищу время, думаю над новым косплеем', avatar: '', dislocation:{country: 'Россия',　city: 'Питер'}},
        // {id: 3, name: 'Элли', lastName: 'Кавай', follower:true , status: 'Посылаю всех на...видео с ответами)', avatar: '', dislocation:{country: 'Россия',　city: 'Создатель сайта не вдавался в такие подробности'}},
        // {id: 4, name: 'Reviver', lastName: 'WLM', follower:false , status: 'Бункер Save Us', avatar: '', dislocation:{country: 'Вакуум',　city: 'Амёба'}}
    ],
    usersCount: 0,
    pageSize: 20,
    currentPage: 1,
    isFetch: false,
    followUnfollowProgress: []
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW_UNFOLLOW_PROGRESS:
            return {
                ...state,
                followUnfollowProgress: action.progress ? [...state.followUnfollowProgress, action.id]
                    : [...state.followUnfollowProgress.filter(id => id !== action.id)]
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) return { ...user, followed: true }
                    return user
                }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) return { ...user, followed: false }
                    return user
                }
                )
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_USERS_COUNT:
            return {
                ...state, usersCount: action.usersCount
            }
        case CHANGE_PAGE:
            return{
                ...state, currentPage: action.currentPage
            }
        default:
            return state
    }
    }



const changePage = (currentPage)=>{
    return{type: CHANGE_PAGE, currentPage}
}
const followUnfollowProgress = (progress, id)=>{
    return{type: FOLLOW_UNFOLLOW_PROGRESS, progress, id}
}
const setUsers = (users)=>{
    return{type:SET_USERS, users}
}
const setUsersCount = (usersCount)=>{
    return{type:SET_USERS_COUNT, usersCount}
}
const follow = (id)=>{
    return{type: FOLLOW, id}
}
const unfollow = (id)=>{
    return{type: UNFOLLOW, id}
}

export const setUsersData = (currentPage = 1, pageSize) => {
    return async (dispatch) => {
        dispatch(fetchStatus(true))
        dispatch(changePage(currentPage))
        const data = await usersDAL.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setUsersCount(data.totalCount))
        dispatch(fetchStatus(false))
    }
}

export const setFollow = (id)=>{
    return (dispatch)=>{
        dispatch(followUnfollowProgress(true, id))
        usersDAL.follow(id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                    alert('Вы подписались на ' + id)}
                else {alert('Ошибка' + data.messages)}
                dispatch(followUnfollowProgress(false, id))
            })
    }
}
export const setUnfollow = (id)=>{
    return (dispatch)=>{
        dispatch(followUnfollowProgress(true, id))
        usersDAL.unfollow(id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id))
                    alert('Вы отписались от ' + id)}
                    else {alert('Ошибка' + data.messages)}
                dispatch(followUnfollowProgress(false, id))
            })
    }
}

export default usersReduser