import React from "react"
import "./ContactCard.css"

function Contact ({profile_picture, name}){
    return(
        <div className="contact-card">
            <span className="contact-pic">{profile_picture}</span>
            <span className="contact-name">{name}</span>
        </div>
    )
}

export default Contact