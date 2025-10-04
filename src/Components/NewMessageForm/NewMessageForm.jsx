import React from 'react';
import { BsEnvelopeHeart } from "react-icons/bs";
import './NewMessageForm.css'


const NewMessageForm = (props) => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value
        
        props.onCreateNewMessage(message_value)
        form.reset()
    }

    return (
        <form className="new-message-form" onSubmit={handleSubmit}>
            <label htmlFor='mensaje'></label>
            <textarea 
                id='mensaje'
                name='mensaje'
                placeholder='Escribe tu mensaje...'
            />
            <button type='submit'><BsEnvelopeHeart /></button>
        </form>
    )
}

export default NewMessageForm