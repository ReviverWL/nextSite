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

export default authReduser