import React from "react"
import { TbHeartCheck } from "react-icons/tb"
import "./Message.css"

function Message ({nombre, msg, date, fromMe}) {
    return (
        <div className={`message-container ${fromMe? 'me' : 'other'}`}>
            <span className="message-sender text-18">{nombre}</span>
            <p className="message-body text-16">{msg}</p>
            <hr/>
            <div className="message-footer text-14">
                <span>{date}</span>
                <div className="message-status">
                    <span>Seen</span>
                    <span className="message-status__seen-icon"><TbHeartCheck /></span>
                </div>
            </div>
        </div>
    )
}

export default Message