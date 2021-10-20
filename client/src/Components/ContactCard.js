import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteContact } from "./../JS/actions/contact";
import { Link } from "react-router-dom";
const ContactCard = ({ contact }) => {
    const dispatch = useDispatch();
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Header style={{ backgroundColor: "LightBlue" }}>
                {contact.name}
            </Card.Header>
            <Card.Body style={{ backgroundColor: "LightGrey" }}>
                <Card.Title>{contact.email}</Card.Title>
                <Card.Text>{contact.phone}</Card.Text>
                <Link to={`/edit/${contact._id}`}>
                    <Button>EDIT </Button>
                </Link>
                <Button
                    variant="outline-dark"
                    onClick={() => dispatch(deleteContact(contact._id))}
                >
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ContactCard;
