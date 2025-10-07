import React from 'react';
import { BsEnvelopeHeart } from "react-icons/bs";
import './NewMessageForm.css'


const NewMessageForm = (props) => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value.trim()
        
        if (message_value.length === 0) return;

        const now = new Date()
        const hora = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false})

        const nuevoMensaje = {
            msg: message_value,
            date: hora,
            fromMe: true
        }

        props.onCreateNewMessage(nuevoMensaje)
        form.reset()
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            event.target.form.requestSubmit();
        }
    }

    return (
        <form className="new-message-form" onSubmit={handleSubmit}>
            <label htmlFor='mensaje'></label>
            <textarea 
                id='mensaje'
                name='mensaje'
                placeholder='Escribe tu mensaje...'
                onKeyDown={handleKeyDown}
            />
            <button type='submit'><BsEnvelopeHeart /></button>
        </form>
    )
}

export default NewMessageForm