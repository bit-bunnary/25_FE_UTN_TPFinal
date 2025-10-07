import React, { useEffect, useRef } from "react"
import Message from "../Message/Message"
import './MessagesList.css'


const MessagesList = ({messages, showDateLabel}) => {
    
    const bottomMsgRef = useRef(null);

    useEffect( () => 
        {
            bottomMsgRef.current?.scrollIntoView({behavior: 'smooth'});
        },
        [messages]
    );

    const firstNewMessageIndex = messages.findIndex(msg => msg.isNew === true)

    return (
        <div className="messages-list">
            {messages.map((message, index) => {
                const isMine = message.author === 'Yo';

                return (
                    <div key={message.id}>
                        {showDateLabel && index === firstNewMessageIndex && isMine && (
                            <div className="messages-list__date-label">Hoy</div>
                        )}
                        <Message
                            nombre={message.author}
                            msg={message.msg_content}
                            date={message.timestamp}
                            fromMe={isMine}
                        />
                    </div>
                );
            })}
            <div ref={bottomMsgRef}></div>
        </div>
    );
}

export default MessagesList