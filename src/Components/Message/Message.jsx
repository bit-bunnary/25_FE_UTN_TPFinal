import React from "react"
import "./Message.css"

function Message ({nombre, msg, date, fromMe}) {
    return (
        <div className={`message-container ${fromMe? 'me' : 'other'}`}>
            <span className="message-sender text-18">{nombre}</span>
            <p className="message-body text-16">{msg}</p>
            <hr/>
            <div className="message-footer text-14">
                <span>{date}</span>
                <span className="message-status">Seen</span>
            </div>
        </div>
    )
}

export default Message