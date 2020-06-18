import React from 'react';

//нужна доп проверка на профиль текущего пользователя
class Status extends React.Component{
    state = {
        editor: false,
        status: this.props.status
    }
    editorMode = ()=>{
        let editor = !this.state.editor
        if(!editor){
            this.props.setNewStatus(this.state.status)
        }
        this.setState({
            editor
        })
    }
    textflowStatus = (e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }
   
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    render(){
        return(
            <div>
            {
            this.state.editor
                ?<input type="text" onChange={this.textflowStatus} autoFocus={true} onBlur={this.editorMode} value={this.state.status}/>
                :<span onDoubleClick={this.editorMode}>{this.props.status || 'Ваш статус'}</span>
            }
            </div>
        )
    }
}

export default Status