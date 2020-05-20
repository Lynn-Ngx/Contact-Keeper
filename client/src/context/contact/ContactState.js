import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = (props) => {
    const initialState = {
        contact: [
            {
                id: 1,
                name: 'Yasmina Nunez',
                email: 'ynunez@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 1,
                name: 'Angela Peng',
                email: 'apeng@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 1,
                name: 'Kate Saloranta',
                email: 'ksaloranta@gmail.com',
                phone: '333-333-3333',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add contact

    // Delete contact

    // Set current contact

    // Clear current contact

    // Update contact

    // Filter contact

    // Clear filter

    return <ContactContext.Provider
        value={{
            contacts: state.contacts
        }}
    >{props.children} </ContactContext.Provider>
}

export default ContactState