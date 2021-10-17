
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../JS/actions/contact";
import { Spinner } from "react-bootstrap";
import ContactCard from "./ContactCard";
const ContactList = () => {
    const dispatch = useDispatch();
    const listContact = useSelector(
        (state) => state.contactReducer.listContact
    );
    const load = useSelector((state) => state.contactReducer.load);
    useEffect(() => {
        dispatch(getContact());
    }, []);
    return (
        <div>
            {load ? (
                <Spinner animation="border" />
            ) : (
                listContact.map(
                    (el) =>
                    <ContactCard contact={el} key={el._id} />   )


            )}
        </div>
    );
};
export default ContactList;
