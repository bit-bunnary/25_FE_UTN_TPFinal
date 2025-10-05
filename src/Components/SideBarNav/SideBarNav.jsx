import React, { useState } from 'react';
import './SideBarNav.css'
import { BsEnvelopePaperHeart , BsPostageHeart , BsPersonHearts  } from "react-icons/bs";
import { BiHeartCircle } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";
import { useNavigate } from 'react-router';
import { GiLockedHeart , GiHeartKey } from "react-icons/gi";
import { TbLockHeart , TbBellHeart } from "react-icons/tb";
import { BsChatHeart } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

const SidebarNav = () => {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/')
    };

    const [showBonusPopUp , setShowBonusPopUp ] = useState(false)
    const [showSettingsMenu, setShowSettingsMenu] =useState(false)


    return (
        <div className="sidebar-nav">
            <div className='sidebar-nav__upper'>    
                <button className="sidebar-nav__button" title="Chats" onClick={handleGoHome}><BsEnvelopePaperHeart /></button>
                <button className="sidebar-nav__button" title="Estados"><BiHeartCircle /></button>
                <button className="sidebar-nav__button" title="Comunidades"><BsPersonHearts  /></button>
            </div>
            <div className='sidebar-nav__lower'>
                <button className="sidebar-nav__button" title="Configuración" onClick={()=> setShowSettingsMenu(true)}>
                    <VscSettingsGear />
                </button>
                <button className="sidebar-nav__button" title="Bonus" onClick={() => setShowBonusPopUp(true)}><BsPostageHeart /></button>
                <button className="sidebar-nav__button" title="Perfil">
                    <img src='/Pinky_PFP.png' className='sidebar-nav__PFP'></img>
                </button>
            </div>

            {showBonusPopUp && (
                <div className="bonus-popup__overlay">
                    <div className="bonus-popup">
                        <div className='bonus-images'>
                            <img src='/picnicbow.gif' alt='moño/bow' className='bonus-image-bow'></img>
                            <img src='/cookierun.gif' alt='stamp' className='bonus-image-stamp'></img>
                            <img src='/picnicbow.gif' alt='moño/bow' className='bonus-image-bow'></img>
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
            
            {showSettingsMenu && (
                <div className="settings-popup__overlay">
                    <div className="settings-popup">
                        <h3>Configuración</h3>
                        <ul className="settings-popup__list">
                            <li className="settings-popup__item"><GiHeartKey/> Cuenta</li>
                            <li className="settings-popup__item"><TbLockHeart /> Privacidad</li>
                            <li className="settings-popup__item"><BsChatHeart/> Chats</li>
                            <li className="settings-popup__item"><TbBellHeart/> Notificaciones</li>
                            <li className="settings-popup__item"><BiLogOut/> Cerrar sesión</li>
                        </ul>
                        <button className="settings-popup__close-btn" onClick={() => setShowSettingsMenu(false)}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SidebarNav;