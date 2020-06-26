import React from 'react'
import StatusForm from './StatusForm'

//нужна доп проверка на профиль текущего пользователя
class Status extends React.Component{
    state = {
        editor: false,
    }
    editorMode = (newStatus)=>{
        let editor = !this.state.editor
        if(!editor){
            this.props.setNewStatus(newStatus.status)
        }
        this.setState({
            editor
        })

    }
    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.status !== this.props.status){
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
    render(){
        return(
            <div>
            {
            this.state.editor
                ?<StatusForm status={this.props.status} onSubmit={this.editorMode}/>
                :<span onDoubleClick={this.editorMode}>{this.props.status || 'Ваш статус'}</span>
            }
            </div>
        )
    }
}

export default Status