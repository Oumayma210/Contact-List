import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postContact } from "../JS/actions/contact";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
const Add = () => {
    const dispatch = useDispatch();
    const [newContact, setnewContact] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const handleChange = (e) => {
        setnewContact({ ...newContact, [e.target.name]: e.target.value });
    };
    const add = () => {
        dispatch(postContact(newContact));
    };
    return (
        <div>
            <h2>Add page</h2>
            <label htmlFor="name">name</label>
            <input 
            type="text"
            name="name"
             value={newContact.name}
             placeholder="enter you name"
             onChange={handleChange}/>
            <label htmlFor="email">email</label>
            <input 
            type="text"
            name="email"
            value={newContact.email}
            placeholder="enter you email"
            onChange={handleChange}/>
            <label htmlFor="phone">name</label>
            <input 
            type="text"
            name="phone"
            value={newContact.phone}
            placeholder="enter you phone number"
            onChange={handleChange}/>
            <Link to="/">
        <Button onClick={()=>add()}> ADD</Button>
        </Link>
        </div>
    );
};

export default Add;
