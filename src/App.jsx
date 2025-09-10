import { useEffect, useState } from "react";
import "./App.css";
import ListContacts from "./components/ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI"
import CreateContacts from "./components/CreateContacts";
import { Route, Routes } from "react-router-dom";

const App = () => {

    const removeContact = (contact) => {
        ContactsAPI.remove(contact);
        setContacts(contacts.filter(c => c.id != contact.id))
    }

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = async () => {
            const res = await ContactsAPI.getAll();
            setContacts(res);
        }

        getContacts();
    }, []);

    return (
        <Routes>
            <Route exact path="/" element={<ListContacts contacts={contacts} onDeleteContact={removeContact}/>}/>
            <Route path="/create" element={<CreateContacts/>}/>
        </Routes>
    )
};

export default App;
