import React, { useState, useEffect } from "react";
import Header from './header';
import AddContact from './addcontact';
import Contactlist from './contact';
import './customer.css'


function App1() {

    const [contacts, setcontacts] = useState([]);
    const addContactHandler = (contact) => {
        console.log(contact)
        setcontacts([...contacts, contact]);
    }

    return (
        <>
            <div className="o">
                <div className="ui container">
                    <Header className />
                    <AddContact addContactHandler={addContactHandler} />
                    <div className="o1">
                        <Contactlist contacts={contacts} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default App1;