import { Switch, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import {Button} from "react-bootstrap";
import  {Link} from "react-router-dom"
function App() {
    return (
        <div className="App">
            <h1>Mern app workshop</h1>
            <Navbar />
            <Link to="/">
                <Button>Contact List</Button>
            </Link>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add" component={Add} />
                <Route path="/edit" component={Edit} />
                <Route path="/*" component={Error} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
