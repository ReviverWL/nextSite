import React from 'react'
import { Input } from '../../../utility_components/Forms/Forms'
import { Field, reduxForm } from 'redux-form'
import { requiredStatus } from '../../../utility_components/Forms/validators'
import { compose } from 'redux'

const StatusForm = (props)=>{
    debugger
        return(
            <form onSubmit={props.handleSubmit}>
            <Field name='status' autoFocus={true} component={Input} validate={[requiredStatus]}/><br/>
            <button>Подтвердить</button>
            </form>
        )

}

export default compose(
    reduxForm({form: 'Status'})
)(StatusForm)