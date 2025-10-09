import React, { useState } from "react"
import './ContactHeader.css'
import { BsCameraVideo } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { BsHeartArrow } from "react-icons/bs";
import { TbBellHeart, TbPhotoHeart, TbMessage2Heart, TbMessageStar, TbHeartBroken  } from "react-icons/tb";
import { useNavigate } from "react-router";

const ContactHeader = ({image, name, last_connection, description}) => {

    const navigate = useNavigate();
    const [showContactPopUp, setShowContactPopUp] = useState(false)

    const handleGoHome = () => {
        navigate('/')
    };

    return (
        <div className="contact-header">
            <div className="contact-header__LnR">
                <button className="contact-header__back-button" onClick={handleGoHome}><BsHeartArrow /></button>
                <button className="contact-header__image-button">
                    <img className="contact-header__image" src={image} alt="Profile Pic" onClick={() => setShowContactPopUp(true)}></img>
                </button>
                <div className="contact-header__texts">
                    <span className="contact-header__name">{name}</span>
                    <span className="contact-header__last-seen">{last_connection}</span>
                </div>
            </div>
            <div className="contact-header__LnR">
                <button className="contact-header__button" title="Llamada"><IoMdCall /></button>
            </div>

            {showContactPopUp && (
                <div className="contact-popup__overlay">
                    <div className="contact-popup">
                        <img src={image} alt="foto grande" className="contact-popup__image" />
                        <h2 className="contact-popup__name">{name}</h2>
                        <span className="contact-popup__desc">"{description}"</span>

                        <div className="contact-popup__button-list">
                            <button className="contact-popup__buttons">
                                <span className="contact-popup__buttons-text">
                                    <TbBellHeart className="contact-popup__buttons-icons"/> Notificaciones
                                </span>
                            </button>
                            <button className="contact-popup__buttons">
                                <span className="contact-popup__buttons-text">
                                    <TbPhotoHeart className="contact-popup__buttons-icons"/> Galería
                                </span>
                            </button>
                            <button className="contact-popup__buttons">
                                <span className="contact-popup__buttons-text">
                                    <TbMessageStar className="contact-popup__buttons-icons"/> Mensajes Destacados
                                </span>
                            </button>
                            <button className="contact-popup__block-button">
                                <span className="contact-popup__buttons-text">
                                    <TbHeartBroken className="contact-popup__buttons-icons"/> Bloquear
                                </span>
                            </button>
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