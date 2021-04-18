import React, {useRef} from 'react'
import { useDispatch } from 'react-redux'

function CreateListing() {
    const newUser = useRef(null)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();

        let formData = newUser.current

        const user = {
            first_name: formData['first-name'].value,
            last_name: formData['last-name'].value,
            password: formData['password'].value,
            email: formData['email'].value,
            privileges: formData['privilege'].value
        }

        dispatch(createUser(user))
            .then(() => {
                inputForm.current.reset()
                console.log('user created')
                history.push('/dash')
            })
    }


    return  <div className='create-user-container'>
                <div className='create-user-container-header'>
                    <h5>Create New Listing: </h5>
                </div>
                <div className='create-user-container-body'>
                    <form ref={newUser} className='create-user-form' autoComplete="off" onSubmit={handleClick}>
                        <div>
                            <h5>Listing Agent</h5>
                        </div>
                        <div>
                            <input
                                type='text'
                                className='name-field'
                                placeholder='first name'
                                label={'agent_first'}
                                name={'agent_first'}/>
                            <input
                                type='text'
                                className='name-field'
                                placeholder='last name'
                                label={'agent_last'}
                                name={'agent_last'}/>
                            <input
                                type='email'
                                className='email-field'
                                placeholder='email'
                                label={'agent_email'}
                                name={'agent_email'}/>
                            <input
                                type='number'
                                className='password-field'
                                placeholder='phone number'
                                label={'agent_contact'}
                                name={'agent_contact'}/>
                            <input
                                type='text'
                                className='password-field'
                                placeholder='agent id'
                                label={'agent_id'}
                                name={'agent_id'}/>
                            <input
                                type='text'
                                className='password-field'
                                placeholder='broker name'
                                label={'broker_name'}
                                name={'broker_name'}/>
                            <input
                                type='text'
                                className='password-field'
                                placeholder='broker id'
                                label={'agent_broker_id'}
                                name={'agent_broker_id'}/>
                        </div>
                        <div>
                            <h5>Property Details</h5>
                        </div>
                        <div>
                            <input
                                type='number'
                                className='name-field'
                                placeholder='house number'
                                label={'house_number'}
                                name={'house_number'}/>
                            <input
                                type='text'
                                className='name-field'
                                placeholder='street name'
                                label={'street_name'}
                                name={'street_name'}/>
                            <input
                                type='text'
                                className='email-field'
                                placeholder='city'
                                label={'city'}
                                name={'city'}/>
                            <input
                                type='number'
                                className='password-field'
                                placeholder='zipcode'
                                label={'zipcode'}
                                name={'zipcode'}/>
                            <input
                                type='text'
                                className='password-field'
                                placeholder='county'
                                label={'county'}
                                name={'county'}/>
                            <input
                                type='text'
                                className='password-field'
                                placeholder='state'
                                label={'state'}
                                name={'state'}/>
                            <input
                                type='text'
                                className='password-field'
                                placeholder='broker name'
                                label={'broker_name'}
                                name={'broker_name'}/>
                            <input
                                type='text'
                                className='password-field'
                                placeholder='broker id'
                                label={'agent_broker_id'}
                                name={'agent_broker_id'}/>
                        </div>
                    <div>
                        <br/>
                        <h5 id='priority-label'>Privileges</h5> 
                        <div className="switch">
                            <div className='group-radio'>
                                <input name="priority_switch" 
                                    id="admin" 
                                    type="radio"
                                    name={'privilege'}
                                    value={'admin'} />
                                    <label for="admin">Admin</label>

                                <input name="priority_switch" 
                                    id="sales_manager"
                                    type="radio"
                                    name={'privilege'}
                                    value={'sales_manager'} />
                                    <label for="sales_manager">Sales Manager</label>
                            </div>

                            <div className='group-radio'>
                                <input name="priority_switch" 
                                    id="agent_lead"
                                    type="radio"
                                    name={'privilege'}
                                    value={'agent_lead'} />
                                    <label for="agent_lead">Agent Lead</label>

                                <input name="priority_switch" 
                                    id="agent" 
                                    type="radio"
                                    name={'privilege'}
                                    value={'agent'}  />
                                    <label for="agent">Agent</label>
                            </div>
                        </div>
                    </div>
    
                        <button type='submit' className='session-button'> CREATE </button>
                    </form>
                </div>
            </div>
}

export default CreateListing
