import React , {useContext} from "react"
import '../ContactCard/ContactCard.css'
import { getAllContacts } from "../../Services/contactService"
import { Link } from "react-router"
import { ContactListContext } from "../../Context/ContactListContext"

const ContactList = () => {
    const {contactList, isContactListLoading} = useContext(ContactListContext)
    console.log("getAllContacts():", getAllContacts());

    return(
        <div className="father-contact-container">
            {
                isContactListLoading
                ? <span>Loading Dream Contacts...</span>
                : contactList.map(
                    (contact) => {
                        return (
                            <ContactItem
                                contact={contact}
                                key={contact.id}
                            />
                        )
                    }
                )
            }
        </div>
    )
}

const ContactItem = (props) => {
    const contact = props.contact
    return(
        <Link to = { '/contact/' + contact.id} key = { contact.id } className="notxt-style">
            <div className="contact-card">
                <img src={contact.profile_pic} alt="pfp" width={'50px'} className="rounded-circle"/>
                <h2 className="contact-name text-16">{contact.name}</h2>
                <hr/>
            </div>
        </Link>
    )
}

export default ContactList

