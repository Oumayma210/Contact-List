import React from "react";
import ContactList from "./../Component/ContactList";
// import { Button } from "react-bootstrap";
// import {Link} from "react-router-dom"
const Home = () => {
    return(
        <div>
            <h2>Contact List</h2>
            {/* <Link to="/add"> */}
                {/* <Button>
                    ADD
                </Button> */}
            {/* </Link> */}
            <ContactList/>
        </div>
    )
};

export default Home;
