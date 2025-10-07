
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import MessagesList from '../../Components/MessagesList/MessagesList'
import { getContactById } from '../../Services/contactService'
import ContactList from '../../Components/ContactList/ContactList'
import './MessageScreen.css'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import ContactHeader from '../../Components/ContactHeader/ContactHeader'
import AppHeader from '../../Components/AppHeader/AppHeader'
import SidebarNav from '../../Components/SideBarNav/SideBarNav'



function MessageScreen() {

    
    const {isContactDetailLoading, contactDetailed, onCreateNewMessage} = useContext(ContactDetailContext)

    const [sakuraLoader, setSakuraLoader] = useState('/Loader_SakuraDreams.gif')

    const [showDateLabel, setShowDateLabel] = useState(false)

    useEffect(() => {
        if (isContactDetailLoading) {
            setSakuraLoader(`/Loader_SakuraDreams.gif?${Date.now()}`)
        }
    }, [isContactDetailLoading])

    const handleCreateNewMessage = (newMessage) => {
        onCreateNewMessage(newMessage)
        setShowDateLabel(true)
    }


    return (
        <div className='message-screen'>
            
            <div className='message-screen__sidebar-container'>
                <SidebarNav />
            </div>

            <div className='message-screen__contacts_y_app-logo-container'>
                <AppHeader/>
                <div className='message-screen__contacts'>
                    <ContactList/>
                </div>
            </div>

            <div className='message-screen__messages-container'>
                {isContactDetailLoading ? (
                    <div className='message-screen__loading'>
                        <img src={sakuraLoader} alt='clouds and moon with a sakura flower in the middle' className='message-screen__loading_img'></img>
                        <span>Loading Dream...</span>
                    </div>
                ) : contactDetailed ? 
                (
                    <>
                        
                        <div className='message-screen__contact-header'>
                            <ContactHeader
                                name={contactDetailed.name}
                                image={contactDetailed.image}
                                last_connection={contactDetailed.last_connection}
                                description={contactDetailed.description}
                            />
                        </div>

                        
                        <div className='message-screen__messages-list'>
                            {showDateLabel && (
                                <div className='message-screen__date-label'>
                                    Ayer
                                </div>
                            )}
                            <MessagesList messages={contactDetailed.messages} showDateLabel={showDateLabel} />
                        </div>

                        <div className='message-form__container'>
                            <NewMessageForm onCreateNewMessage={handleCreateNewMessage} />
                        </div>
                    </>) 
                : (
                    <div className='message-screen__not-found'>
                        <img src='../404sakura.gif' className='message-screen__not-found__image'></img>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MessageScreen

