import React from 'react'
import { Input } from '../../../utility_components/Forms/Forms'
import { Field, reduxForm } from 'redux-form'
import { requiredStatus } from '../../../utility_components/Forms/validators'
import { compose } from 'redux'
import { connect } from 'react-redux'

const StatusForm = ({handleSubmit, setEditorMode}) => {
    return (
        <form onSubmit={handleSubmit} >
            <Field name='status' autoFocus={true} component={Input} validate={[requiredStatus]}  /><br />
            <button type='button' onClick={()=>{setEditorMode(false)}}>Отмена</button><button>Подтвердить</button>
        </form>
    )

}
const mapStateToProps = (state)=>{
    return{
        initialValues:{status: state.profilePage.status}
    }
}
export default compose(
    connect(mapStateToProps, {}),
    reduxForm({form: 'Status'
    }),
    
    
)(StatusForm)