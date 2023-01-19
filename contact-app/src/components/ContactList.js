import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const deleteContact = id => props.getContact(id)

    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add">
                <button className='ui violet button'>Add Contact</button>
            </Link>
            <div className='ui celled list'>
                {props.contacts.map(contact => <ContactCard key={contact.id} contact={contact} clickHandler={deleteContact} />)}
            </div>
        </div>
    )
}

export default ContactList