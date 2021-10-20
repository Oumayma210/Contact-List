import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactList from "../Components/ContactList";
const Home = () => {
    return (
        <div>
            <Link to='/add'>
            <Button>ADD</Button>
            </Link>
            <ContactList/>
        </div>
    );
};
export default Home;
