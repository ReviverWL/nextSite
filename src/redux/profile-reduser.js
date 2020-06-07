const ADD_POST = 'ADD-POST'
const TEXTFLOW_CHANGE = 'TEXTFLOW-CHANGE'
let initialState = {

    posts: [
        { id: 1, text: '初音ミク', likes: 39 },
        { id: 2, text: 'azazazazaaza', likes: 10 },
        { id: 3, text: 'nyao', likes: 1024 },
    ],
    textflowPost: ''
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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const textflowActionCreator = (text) => ({ type: TEXTFLOW_CHANGE, text: text })

export default profileReduser