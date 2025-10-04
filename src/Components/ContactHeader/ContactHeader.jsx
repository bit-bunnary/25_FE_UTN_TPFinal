import React from "react"
import './ContactHeader.css'
import { BsCameraVideo } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";

const ContactHeader = ({image, name, last_connection}) => {

    return(
        <div className="contact-header">
            <div className="contact-header__LnR">
                <img className="contact-header__image" src={image}></img>
                <span className="contact-header__name">{name}</span>
                <div className="contact-header__last-seen">
                    {last_connection}
                </div>
            </div>
            <div className="contact-header__LnR">
                <button className="contact-header__button" title="Videollamada"><BsCameraVideo /></button>
                <button className="contact-header__button" title="Llamada"><IoMdCall /></button>
            </div>
        </div>
    )
    
}

export default ContactHeader