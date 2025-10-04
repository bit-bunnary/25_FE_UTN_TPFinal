import React, { useEffect, useRef } from "react"
import Message from "../Message/Message"
import './MessagesList.css'


const MessagesList = (props) => {
    
    const bottomMsgRef = useRef(null);

    useEffect( () => 
        {
            bottomMsgRef.current?.scrollIntoView({behavior: 'smooth'});
        },
        [props.messages]
    );

    return(
        <div className="messages-list">
            {props.messages.map((message) => 
                (
                    <div key={message.id}>
                        <Message
                            nombre={message.author}
                            msg={message.msg_content}
                            date={message.timestamp}
                            fromMe={message.author === 'Yo'}
                        />
                    </div>
                )
            )}
            <div ref={bottomMsgRef}></div>
        </div>
    )
}

export default MessagesList