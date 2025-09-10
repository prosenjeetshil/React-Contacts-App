import React from 'react'
import ImageInput from './ImageInput'
import { Link } from 'react-router-dom'

const CreateContacts = () => {
  return (
    <div>
        <Link className='close-create-contact' to='/'>Close Contacts</Link>
        <form className='create-contact-form'> 
            <ImageInput className='create-contact-avatar-input' name='avatarURL' maxHeight={64} />
            <div className='create-contact-details'>
                <input type='text' name='name' placeholder='Enter Name' />
                <input type='text' name='handle' placeholder='Enter Handle' />
                <button>Save</button>
            </div>
        </form>
    </div>
    
  )
}

export default CreateContacts