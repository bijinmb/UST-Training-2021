import React from 'react';
//import avatar from '../components/images/avatar.jpg';
import './customer.css'

const ContactCard = (props) => {
    const { sid, sname, address, coursename } = props.contact;

    return (
        <div className="item">
            <div className="content">
                <div className="header">ID: {sid}</div>
                <div>Name: {sname}</div>
                <div className="header">Address: {address}</div>
                <div>Course: {coursename}</div>
            </div>
            <div className="del">
                <i className="trash alternate icon" style={{ color: "red", marginTop: "7px" }} ></i>
            </div>
            <hr></hr>
        </div>
    );
};
export default ContactCard;