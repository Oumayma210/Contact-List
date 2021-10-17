import React from "react";
import { Button, Card, Col } from "react-bootstrap";
const ContactCard = ({ contact }) => {
    return (
        <div>
            <Col xs={6} md={4}>
                <Card style={{ width: "15rem" }}>
                    <Card.Body>
                        <Card.Title>Info</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {contact.name}
                        </Card.Subtitle>
                        <Card.Text>{contact.phone}</Card.Text>
                        <Card.Text>{contact.email}</Card.Text>
                    </Card.Body>
                    <Button>Delete</Button>
                </Card>
                <br />
            </Col>
        </div>
    );
};

export default ContactCard;
