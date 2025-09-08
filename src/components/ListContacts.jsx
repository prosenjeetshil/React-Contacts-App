import React from 'react'

const ListContacts = ({ contacts }) => {
    console.log(contacts)
  return (
    <ol className='contact-list'>
        {
            contacts.map( contact => {
                return (
                    <li key={contact.id}>{contact.name}</li>
                )
            })
        }
    </ol>
  )
}

export default ListContacts