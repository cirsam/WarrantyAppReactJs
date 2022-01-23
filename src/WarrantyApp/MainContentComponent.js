import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import DashBoard from '../LoginSystem/Dashboard';
import Home from '../LoginSystem/Home';
import Login from '../LoginSystem/Login';
import Logout from '../LoginSystem/Logout';

const MainContentComponents = (prop) => {

const handleStateFromLogin = (stateItems)=>{
    prop.setState(stateItems)
}

return(
        <main className='container'>   
        <Router>
            <Route exact path="/" component= {Home} />
            <Route exact path="/dashboard" component= {DashBoard} />
            <Route path = "/login" component = {()=><Login setState={handleStateFromLogin} />} />
            <Route path = "/logout" component = {Logout} />
        </Router>
        </main>
    );
}

export default MainContentComponents;