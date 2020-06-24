import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
import { Input } from '../../utility_components/Forms/Forms'
import style from './LoginForm.module.css'
import { requiredField } from '../../utility_components/Forms/validators'

const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='email' placeholder='E-Mail' component={Input} type='email' validate={[requiredField]}/>
            </div>
            <div>
                <Field name='password' placeholder='Пароль' component={Input} type='password' validate={[requiredField]}/>
            </div>
            <div>'Запомнить меня'
                <Field name='rememberMe' component={Input} type='checkbox' />
            </div>
                <div className={ props.captcha === '' ? style.captchaOff : style.captchaOn}>
                    <div>
                        <img src={props.captcha} alt='Капча не загрузилась. Пожалуйста перезагрузите страницу' />
                    </div>
                    <div>
                        <Field name='checkCaptcha' component={Input} />
                    </div>
                </div>
            <div>
                <button>Нажми на меня ;)</button>
            </div>
        </form>
    )
}
export default compose(
    
    reduxForm({
        form: 'Login'
    })
)(LoginForm)