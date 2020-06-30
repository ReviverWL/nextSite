import {usersDAL} from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const IS_FETCH_STATUS = 'IS_FETCH_STATUS'
const FOLLOW_UNFOLLOW_PROGRESS = 'FOLLOW_UNFOLLOW_PROGRESS'

let initialState={
    users:[
        // {id: 1, name: 'Miku', lastName: 'Hatsune', follower:true , status: 'Care about Saya', avatar: 'https://99px.ru/sstorage/53/2014/06/mid_103620_9079.jpg', dislocation:{country: '日本',　city: '大阪市'}},
        // {id: 2, name: 'Сайя', lastName: 'Скарлет', follower:true , status: 'Ищу время, думаю над новым косплеем', avatar: '', dislocation:{country: 'Россия',　city: 'Питер'}},
        // {id: 3, name: 'Элли', lastName: 'Кавай', follower:true , status: 'Посылаю всех на...видео с ответами)', avatar: '', dislocation:{country: 'Россия',　city: 'Создатель сайта не вдавался в такие подробности'}},
        // {id: 4, name: 'Reviver', lastName: 'WLM', follower:false , status: 'Бункер Save Us', avatar: '', dislocation:{country: 'Вакуум',　city: 'Амёба'}}
    ],
    pages: [],
    usersCount: 0,
    pageSize: 20,
    stepAside: 4, //кол-во страниц по бокам относительно выделенной
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
        case IS_FETCH_STATUS:
            return {
                ...state, isFetch: action.isFetch
            }

        case CHANGE_PAGE:
            let stateCopy = { ...state }
            let pagesCount = Math.ceil(stateCopy.usersCount / stateCopy.pageSize)
            stateCopy.currentPage = action.currentPage
            stateCopy.pages = [...state.pages]
            stateCopy.pages.length = 0
            if (stateCopy.currentPage >= 1 && stateCopy.currentPage <= 5) { //страницы с 1 по 9

                for (let i = 1; i < 10; i++) {
                    stateCopy.pages.push(i)
                }
            }
            else if (stateCopy.currentPage >= 6 && stateCopy.currentPage <= pagesCount - stateCopy.stepAside) {//логика страниц в центре(тех, что при активации изменяют номера страниц) не считая последние
                const startCounter = stateCopy.currentPage - stateCopy.stepAside
                const endCounter = stateCopy.currentPage + stateCopy.stepAside
                for (let i = startCounter; i <= endCounter; i++) {
                    stateCopy.pages.push(i)
                }
            }
            else if (stateCopy.currentPage > pagesCount - stateCopy.stepAside && stateCopy.currentPage <= pagesCount) {//фиксированное кол-во страниц
                for (let i = pagesCount - stateCopy.stepAside * 2; i <= pagesCount; i++) {
                    stateCopy.pages.push(i)
                }
            }
            else if (stateCopy.currentPage <= 0 || stateCopy.currentPage > pagesCount) {
                alert("Такой страницы не существует. Введите корректный номер страницы.")
            }
            else {
                alert("Что-то пошло не так. Данные отображаются некорректно. Свяжитесь с администратором")//Место для try/catch
            }
            return stateCopy
        default:
            return state
    }
    }



export const changePage = (currentPage)=>{
    return{type: CHANGE_PAGE, currentPage}
}
export const followUnfollowProgress = (progress, id)=>{
    return{type: FOLLOW_UNFOLLOW_PROGRESS, progress, id}
}

export const setUsers = (users)=>{
    return{type:SET_USERS, users}
}
export const setUsersCount = (usersCount)=>{
    return{type:SET_USERS_COUNT, usersCount}
}
export const fetchStatus = (isFetch)=>{
    return{type:IS_FETCH_STATUS, isFetch}
}

export const follow = (id)=>{
    return{type: FOLLOW, id}
}
export const unfollow = (id)=>{
    return{type: UNFOLLOW, id}
}

export const setUsersData = (currentPage, pageSize) => {
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