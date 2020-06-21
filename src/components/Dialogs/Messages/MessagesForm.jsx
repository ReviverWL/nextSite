import React from 'react'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'
import {Textarea} from '../../../utility_components/Forms/Forms'
import { maxLength, requiredField } from '../../../utility_components/Forms/validators'

const maxLength50 = maxLength(50);
const MessagesForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='message' component={Textarea} validate={[requiredField, maxLength50]} />
            <div>
                <button>Батончик</button>
            </div>
        </form>
    )
}

export default compose(
    reduxForm({
        form: 'Messages'
    })
)(MessagesForm)