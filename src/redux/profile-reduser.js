const ADD_POST = 'ADD-POST'
const TEXTFLOW_CHANGE = 'TEXTFLOW-CHANGE'

let initialState = { 
     
    posts : [
        {id : 1, text:'初音ミク', likes:39},
        {id : 2, text:'azazazazaaza', likes:10},
        {id : 3, text:'nyao', likes:1024},
    ],
    textflowPost: ''
}

const profileReduser=(state = initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 4, text: state.textflowPost, likes: 0}
            state.posts.push(newPost)
            state.textflowPost = ''
        return state
    case TEXTFLOW_CHANGE:
            state.textflowPost = action.text
        return state
    default:
        return state
    }
}

export const addPostActionCreator =()=>({type: ADD_POST})
export const textflowActionCreator = (text)=>({type: TEXTFLOW_CHANGE, text: text})

export default profileReduser