import { getConfirmedUserData } from "./auth-reduser"

const READY_FOR_ACTIONS = 'main/READY_FOR_ACTIONS'

let initialState = {
    readiness: false
}

const mainReduser = (state = initialState, action)=>{
    switch(action.type){
        case READY_FOR_ACTIONS:{
            return {
                ...state,
                readiness: action.readiness
            }
        }
        default:
            return state
    }
}

const changerReadiness = (readiness)=>{return {type:READY_FOR_ACTIONS, readiness}}

export const changeReadiness = ()=>{
    return(dispatch)=>{
        let promise = dispatch(getConfirmedUserData())
        Promise.all([promise]).then(()=>{
            dispatch(changerReadiness(true))
        })
        
    }
}

export default mainReduser