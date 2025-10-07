import React from "react"
import { TbHeartCheck, TbHeartBroken } from "react-icons/tb"
import "./Message.css"

function Message ({nombre, msg, date, fromMe, status}) {

    const statusClass = status === 'Sent' ? 'sent' : 'seen'
    const IconComponent = status === 'Sent' ? TbHeartBroken : TbHeartCheck

    return (
        <div className={`message-container ${fromMe? 'me' : 'other'}`}>
            <span className="message-sender text-18">{nombre}</span>
            <p className="message-body text-16">{msg}</p>
            <hr/>
            <div className="message-footer text-14">
                <span>{date}</span>
                <div className={`message-status ${statusClass}`}>
                        <span>{status || 'Seen'}</span>
                        <span className="message-status__icon"><IconComponent /></span>
                    </div>
            </div>
        </div>
    )
}

export default Message