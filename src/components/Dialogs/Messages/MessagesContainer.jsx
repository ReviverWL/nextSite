import Messages from './Messages'
import { connect } from 'react-redux'
import {addMessage} from '../../../redux/dialogs-reduser'


const mapStateToProps = (state)=>{
    return{
        messages: state.dialogsPage.messages
    }
}

const MessagesContainer = connect(mapStateToProps, {addMessage})(Messages)
export default MessagesContainer;