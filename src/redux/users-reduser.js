const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'

let initialState={
    users:[
        // {id: 1, name: 'Miku', lastName: 'Hatsune', follower:true , status: 'Care about Saya', avatar: 'https://99px.ru/sstorage/53/2014/06/mid_103620_9079.jpg', dislocation:{country: '日本',　city: '大阪市'}},
        // {id: 2, name: 'Сайя', lastName: 'Скарлет', follower:true , status: 'Ищу время, думаю над новым косплеем', avatar: '', dislocation:{country: 'Россия',　city: 'Питер'}},
        // {id: 3, name: 'Элли', lastName: 'Кавай', follower:true , status: 'Посылаю всех на...видео с ответами)', avatar: '', dislocation:{country: 'Россия',　city: 'Создатель сайта не вдавался в такие подробности'}},
        // {id: 4, name: 'Reviver', lastName: 'WLM', follower:false , status: 'Бункер Save Us', avatar: '', dislocation:{country: 'Вакуум',　city: 'Амёба'}}
    ],
    pages: [1, 2],
    usersCount: 60,
    currentPage: 1,
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) return { ...user, follower: true }
                    return user
                }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) return { ...user, follower: false }
                    return user
                }
                )
            }
        case SET_USERS:
            return{
                ...state, users: action.users
        }
        case CHANGE_PAGE:{
                let stateCopy = {...state}
                stateCopy.currentPage = action.currentPage
                stateCopy.pages = [...state.pages]
                
                    debugger
                    const stepAside = 4//кол-во страниц по бокам относительно выделенной
                    stateCopy.pages.length = 0
                    switch (true) {
                        case (stateCopy.currentPage >= 1 && stateCopy.currentPage <= 5)://страницы с 1 по 9
                            for (let i = 1; i <= 10; i++) {
                                stateCopy.pages.push(i)
                            }
                            break;
                        case (stateCopy.currentPage >= 6 && stateCopy.currentPage <= stateCopy.countUsers - stepAside)://логика страниц в центре(тех, что при активации изменяют номера страниц) не считая последние
                            const startCounter = stateCopy.currentPage - stepAside
                            const endCounter = stateCopy.currentPage + stepAside
                        for (let i = startCounter; i <= endCounter; i++) {
                                stateCopy.pages.push(i)
                            }
                            break;
                        case (stateCopy.currentPage > stateCopy.countUsers - stepAside)://фиксированное кол-во страниц
                            for (let i = stateCopy.countUsers - stepAside * 2; i <= stateCopy.countUsers; i++) {
                                stateCopy.pages.push(i)
                            }
                            break;
                        case (stateCopy.currentPage <= 0 || stateCopy.currentPage > stateCopy.countUsers):
                            alert("Такой страницы не существует. Введите корректный номер страницы.")
                            break
                        default:
                            alert(/*"Введите номер страницы. Данное поле распознаёт только цифры."*/"Что-то пошло не так. Данные отображаются некорректно. Свяжитесь с администратором")//Место для try/catch
                            break;
                    
                }
                return stateCopy
        }
        default:
            return state
    }
}

export const changePageAC = (currentPage)=>{
    return{type: CHANGE_PAGE, currentPage}
}

export const setUsersAC = (users)=>{
    return{type:SET_USERS, users}
}

export const followAC = (id)=>{
    return{type: FOLLOW, id}
}
export const unfollowAC = (id)=>{
    return{type: UNFOLLOW, id}
}

export default usersReduser