import React from "react"
import ContactList from "../../Components/ContactList/ContactList"
import SidebarNav from "../../Components/SideBarNav/SideBarNav"
import AppHeader from "../../Components/AppHeader/AppHeader"
import { TbMailHeart } from "react-icons/tb";
import './HomeScreen.css'

function HomeScreen(){
    return(
        <div className='home-screen'>
            <div className='home-screen__sidebar-container'>
                <SidebarNav />
            </div>

            <div className='home-screen__contacts_y_app-logo-container'>
                <AppHeader />
                <div className="home-screen__contacts">
                    <ContactList />
                </div>
            </div>
            <div className='home-screen__welcome-container'>
                <div className='home-screen__welcome-message'>
                    <img src="/public/mail8.gif" alt="Letter" className="home-screen__welcome-icon" />
                    <h2>Seleccioná un chat y empezá a mensajear</h2>
                </div>
                <div className='home-screen__footer-note'>
                    <div>
                        <span className="home-screen__footer-note__icon"><TbMailHeart/></span>
                    </div>
                    <div>
                        <span>
                            Tus cartas viajan seguras con palomas virtuales protegidas de extremo a extremo.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
