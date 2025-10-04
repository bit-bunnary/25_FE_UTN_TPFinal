import React from 'react';
import './AppHeader.css'
import { TbCameraHeart } from "react-icons/tb";

const AppHeader = () => {
    return (
        <div className="app-header">
            <div className='app-header__LnR'>
                <img src="/LogoSD.png" alt="Logo" className="app-header__logo" />
                <h1 className="app-header__title">SakuraDreams</h1>
            </div>
            <div className='app-header__LnR'>
                <button className='app-header__button' title='Cámara'><TbCameraHeart /></button>
            </div>
        </div>
    );
};

export default AppHeader;