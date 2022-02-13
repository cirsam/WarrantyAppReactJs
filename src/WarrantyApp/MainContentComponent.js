import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import DashBoard from '../LoginSystem/Dashboard';
import Home from '../LoginSystem/Home';
import Login from '../LoginSystem/Login';
import Logout from '../LoginSystem/Logout';
import Signup from '../LoginSystem/Signup'

const MainContentComponents = (prop) => {

const handleStateFromLogin = (stateItems)=>{
    prop.setState(stateItems)
}

return(
        <main className='container'>   
        <Router>
            <Route exact path="/" component= {Home} />
            <Route exact path="/home" component= {Home} />
            <Route exact path="/dashboard" component= {()=><DashBoard stateObject={prop} />} />
            <Route path = "/login" component = {()=><Login setState={handleStateFromLogin} />} />
            <Route path = "/logout" component = {Logout} />
            <Route path = "/register" component = {Signup} />
        </Router>
        </main>
    );
}

export default MainContentComponents;