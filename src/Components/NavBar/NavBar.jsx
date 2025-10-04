import React, { useState } from 'react';
import './NavBar.css'

const NavBar = () => {
    const [is_Open, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!is_Open)
    }

    return (
        <header>
            <h2>
                Sakura Dreams 🌸
            </h2>
            <nav className='nav-desktop'>
                <a href="">Search</a>
                <a href="">Random DreamChat</a>
                <a href="">Stories</a>
            </nav>
            <button className='btn-menu' onClick={toggleMenu}>Menu</button>
            {
                is_Open && 
                <nav className='nav-mobile'>
                    <a href="">Search</a>
                    <a href="">Random DreamChat</a>
                    <a href="">Stories</a>
                </nav>
            }
        </header>
    )
}

export default NavBar