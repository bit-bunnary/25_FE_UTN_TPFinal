import React from "react"
import './ContactHeader.css'
import { BsCameraVideo } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { BsHeartArrow } from "react-icons/bs";
import { useNavigate } from "react-router";

const ContactHeader = ({image, name, last_connection}) => {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/')
    };

    return(
        <div className="contact-header">
            <div className="contact-header__LnR">
                <button className="contact-header__back-button" onClick={handleGoHome}><BsHeartArrow /></button>
                <img className="contact-header__image" src={image}></img>
                <div className="contact-header__texts">
                    <span className="contact-header__name">{name}</span>
                    <span className="contact-header__last-seen">{last_connection}</span>
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