import Post from './Post/MyPost';
import {textflowActionCreator, addPostActionCreator} from './../../../redux/profile-reduser'
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
    return{
        profilePage : state.profilePage
    }
    
}
const mapDispatchToProps = (dispatch)=>{
    return{
        textflow : (text)=>{dispatch(textflowActionCreator(text))},
        addPost : ()=>{dispatch(addPostActionCreator())}
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Post)
export default MyPostsContainer;
