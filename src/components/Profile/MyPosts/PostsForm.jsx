import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'

const PostsForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='postMessage' component='textarea'/>
            {/* <textarea onKeyPress={event => {
                if (event.key === "Enter") {
                    props.addPost()
                    event.preventDefault()
                }
            }}
                value={props.textflowPost}
                onChange={() => { props.textflow(post.current.value) }} ref={post} /> */}
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