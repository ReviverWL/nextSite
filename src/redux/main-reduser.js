import { getConfirmedUserData } from "./auth-reduser"

const READY_FOR_ACTIONS = 'main/READY_FOR_ACTIONS'
const IS_FETCH_STATUS = 'main/IS_FETCH_STATUS'

let initialState = {
    readiness: false,
    isFetch: false
}

const mainReduser = (state = initialState, action)=>{
    switch(action.type){
        case READY_FOR_ACTIONS:{
            return {
                ...state,
                readiness: action.readiness
            }
        }
        case IS_FETCH_STATUS:
            return {
                ...state, isFetch: action.isFetch
            }
        default:
            return state
    }
}

const changerReadiness = (readiness)=>{return {type:READY_FOR_ACTIONS, readiness}}
export const fetchStatus = (isFetch)=>{return{type:IS_FETCH_STATUS, isFetch}}

export const changeReadiness = ()=>{
    return(dispatch)=>{
        let promise = dispatch(getConfirmedUserData())
        Promise.all([promise]).then(()=>{
            dispatch(changerReadiness(true))
        })
        
    }
}

export default mainReduser