import React from 'react'
import ImageInput from './ImageInput'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

const CreateContacts = ({onCreateContact}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = serializeForm(e.target, {hash: true});

        if(onCreateContact){
            onCreateContact(value);
            
        }
    }
  return (
    <div>
        <Link className='close-create-contact' to='/'>Close Contacts</Link>
        <form className='create-contact-form' onSubmit={handleSubmit}> 
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