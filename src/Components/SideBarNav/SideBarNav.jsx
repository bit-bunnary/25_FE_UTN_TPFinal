import React, { useState } from 'react';
import './SideBarNav.css'
import { BsEnvelopePaperHeart , BsPostageHeart , BsPersonHearts  } from "react-icons/bs";
import { BiHeartCircle } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";
import { useNavigate } from 'react-router';
import { GiLockedHeart } from "react-icons/gi";

const SidebarNav = () => {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/')
    };

    const [showBonusPopUp , setShowBonusPopUp ] = useState(false)

    return (
        <div className="sidebar-nav">
            <div className='sidebar-nav__upper'>    
                <button className="sidebar-nav__button" title="Chats" onClick={handleGoHome}><BsEnvelopePaperHeart /></button>
                <button className="sidebar-nav__button" title="Estados"><BiHeartCircle /></button>
                <button className="sidebar-nav__button" title="Comunidades"><BsPersonHearts  /></button>
            </div>
            <div className='sidebar-nav__lower'>
                <button className="sidebar-nav__button" title="Configuración"><VscSettingsGear /></button>
                <button className="sidebar-nav__button" title="Bonus" onClick={() => setShowBonusPopUp(true)}><BsPostageHeart /></button>
                <button className="sidebar-nav__button" title="Perfil">
                    <img src='/public/Pinky_PFP.png' className='sidebar-nav__PFP'></img>
                </button>
            </div>

            {showBonusPopUp && (
                <div className="bonus-popup__overlay">
                    <div className="bonus-popup">
                        <div className='bonus-images'>
                            <img src='../public/picnicbow.gif' alt='moño/bow' className='bonus-image-bow'></img>
                            <img src='../public/cookierun.gif' alt='stamp' className='bonus-image-stamp'></img>
                            <img src='../public/picnicbow.gif' alt='moño/bow' className='bonus-image-bow'></img>
                        </div>
                        <h3>¡Secretito desbloqueado!</h3>
                        <p className='bonus-text'>Hacer este botoncito no fue en vano ya que lo descubriste!(づ￣ 3￣)づ</p>
                        <span className='bonus-icon'><GiLockedHeart /></span>
                        <button className="bonus-popup__close-btn" onClick={() => setShowBonusPopUp(false)}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SidebarNav;