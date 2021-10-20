import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getContact } from "./../JS/actions/contact";
import ContactCard from "./ContactCard";
import { Spinner } from "react-bootstrap";

const ContactList = () => {
    const dispatch = useDispatch();
    const listContacts = useSelector(
        (state) => state.contactReducer.listContacts
    );
    const load = useSelector((state) => state.contactReducer.load);
    useEffect(() => {
        dispatch(getContact());
    }, [dispatch]);
    return (
        <div style={{justifyContent:"space-between", display: "flex", flexWrap: "wrap" }}>
            {load ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                listContacts.map((el) => (
                    <ContactCard contact={el} key={el._id} />
                ))
            )}
        </div>
    );
};

export default ContactList;
