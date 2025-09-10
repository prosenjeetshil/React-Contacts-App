import { useEffect, useState } from "react";
import "./App.css";
import ListContacts from "./components/ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI"

const App = () => {

    const removeContact = (contact) => {
        ContactsAPI.remove(contact);
        setContacts(contacts.filter(c => c.id != contact.id))
    }

    const [contacts, setContacts] = useState([]);

    useEffect(()=>{
        const getContacts = async () => {
            const res = await ContactsAPI.getAll();
            setContacts(res);
        }

        getContacts();
    }, []);

    return (
        <div>
            <ListContacts contacts={contacts} onDeleteContact={removeContact}/>
        </div>
    )
};

export default App;
