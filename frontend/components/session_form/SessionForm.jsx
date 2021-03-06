import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/session_actions'

const SessionForm = () => {

    const inputForm = useRef(null)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        let formData = inputForm.current

        const user = {
            email: formData['email'].value,
            password: formData['password'].value 
        }

        dispatch(login(user))
            .then(() => {
                inputForm.current.reset()
                history.push('/dash')
                console.log('we are in')
            })
    }

    return  <div className='session-form-container'>
                <div className='session-form-header'>
                    <h1>Hermes CRM</h1>
                </div>
                <form ref={inputForm} className='session-form' autoComplete="off" onSubmit={handleClick}>
                    <input
                        type='email'
                        className='email-field'
                        placeholder='email'
                        label={'email'}
                        name={'email'}/>

                    <input
                        type='password'
                        className='password-field'
                        placeholder='password'
                        label={'password'}
                        name={'password'}/>
                    <button type='submit' className='session-button'> LOG IN </button>
                </form>
            </div>  
}

export default SessionForm
