import DialogUser from './DialogUser';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
    return{
        dialogsPage : state.dialogsPage.users
    }
}

const DialogUserContainer = connect(mapStateToProps)(DialogUser)
export default DialogUserContainer;