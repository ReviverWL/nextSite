const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
    users : [
    { id:'01', name:'Miku', group: 'vocaloid',}, 
    { id:'0139', name:'Saya'}, 
    { id:'010', name:'Elli'}, 
    { id:'02', name:'Rin'}, 
    { id:'10', name:'AnonCos'},
    ],
    messages : [
    {id:1, message:'Hey'},
    {id:2, message:'Yo'},
    {id:3, message:'Owww'},
    {id:4, message:'Sumimasen'},
    {id:5, message:'Hi'},
    ],
}

const dialogsReduser=(state = initialState, action)=>{
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = {id: state.messages.length + 1, message: action.message}
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages, newMessage]
            return stateCopy
        }
        default:
            return state
    }
}

export const addMessage = (message)=>({type:ADD_MESSAGE, message})

export default dialogsReduser