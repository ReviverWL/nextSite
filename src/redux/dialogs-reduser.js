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
    return state
}

export default dialogsReduser