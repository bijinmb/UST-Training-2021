import React from 'react';
import ContactCard from './contactcard';
import './customer.css'

const Contactlist = (props) =>
 {
    console.log(props);
    const rendercontact = props.contacts.map((contact) => 
    {
        return(
            <ContactCard contact={contact} ></ContactCard>
        
        );
    });
    
    return(
        <div className="ui celled list" >
            {rendercontact}
            </div>
    )
    
};
export default Contactlist;