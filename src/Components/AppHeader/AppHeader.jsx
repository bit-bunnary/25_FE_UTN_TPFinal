import React from 'react';
import './AppHeader.css'

const AppHeader = () => {
    return (
        <div className="app-header">
            <img src="/LogoSD.png" alt="Logo" className="app-header__logo" />
            <h1 className="app-header__title">SakuraDreams</h1>
        </div>
    );
};

export default AppHeader;