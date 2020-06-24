import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
import { Textarea } from '../../../utility_components/Forms/Forms'
import { requiredMessage, maxLength } from '../../../utility_components/Forms/validators'

const maxLength300 = maxLength(300)
const PostsForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='postMessage' component={Textarea} validate={[requiredMessage, maxLength300]}/>
        </div>
        <div>
            <button >Впиши своё имя в историю</button>
        </div>
    </form>)
}

export default compose(
    reduxForm({
        form: 'Posts'
    })
)(PostsForm)