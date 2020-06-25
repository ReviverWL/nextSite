import React from 'react'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'
import {Textarea} from '../../../utility_components/Forms/Forms'
import { maxLength, requiredMessage } from '../../../utility_components/Forms/validators'

const maxLength300 = maxLength(300)
const MessagesForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='message' component={Textarea} validate={[requiredMessage, maxLength300]} />
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