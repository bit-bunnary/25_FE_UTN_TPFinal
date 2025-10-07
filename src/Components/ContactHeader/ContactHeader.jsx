import React, { useState } from "react"
import './ContactHeader.css'
import { BsCameraVideo } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { BsHeartArrow } from "react-icons/bs";
import { TbBellHeart, TbPhotoHeart, TbMessage2Heart } from "react-icons/tb";
import { useNavigate } from "react-router";

const ContactHeader = ({image, name, last_connection}) => {

    const navigate = useNavigate();
    const [showContactPopUp, setShowContactPopUp] = useState(false)

    const handleGoHome = () => {
        navigate('/')
    };

    return (
        <div className="contact-header">
            <div className="contact-header__LnR">
                <button className="contact-header__back-button" onClick={handleGoHome}><BsHeartArrow /></button>
                <img className="contact-header__image" src={image} alt="Profile Pic" onClick={() => setShowContactPopUp(true)}></img>
                <div className="contact-header__texts">
                    <span className="contact-header__name">{name}</span>
                    <span className="contact-header__last-seen">{last_connection}</span>
                </div>
            </div>
            <div className="contact-header__LnR">
                <button className="contact-header__button" title="Videollamada"><BsCameraVideo /></button>
                <button className="contact-header__button" title="Llamada"><IoMdCall /></button>
            </div>

            {showContactPopUp && (
                <div className="contact-popup__overlay">
                    <div className="contact-popup">
                        <img src={image} alt="foto grande" className="contact-popup__image" />
                        <h2 className="contact-popup__name">{name}</h2>

                        <div className="contact-popup__button-list">
                            <button className="contact-popup__buttons"><TbBellHeart/> Notificaciones</button>
                            <button className="contact-popup__buttons"><TbPhotoHeart /> Galería</button>
                            <button className="contact-popup__buttons"><TbMessage2Heart /> Mensajes Destacados</button>
                        </div>

                        <button className="contact-popup__close-btn" onClick={() => setShowContactPopUp(false)}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )

}

export default ContactHeader