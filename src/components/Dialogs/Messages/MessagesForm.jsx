import React from 'react'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'

const MessagesForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='message' component='textarea' />
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