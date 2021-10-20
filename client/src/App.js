import "./App.css";
import { Switch } from "react-router";
import { Route } from "react-router";
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Error from './pages/Error';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>Mern app workshop</h1>
            <Navbar/>
           <Link to='/'> <Button>Contact list</Button></Link>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add" component={Add} />
                <Route path="/edit" component={Edit} />
                <Route path="/*" component={Error} />
            </Switch>
            <Footer/>

        </div>
    );
}

export default App;
