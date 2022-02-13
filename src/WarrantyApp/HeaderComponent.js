import React from 'react';
import MenuComponents from './Menucomponents.js';
import logo from '../logo.svg';

const HeaderComponents = (prop) => {
    let loginLinks;
    if(prop.state!==null && prop.state.length!==0 && prop.state[0]?.isLoggedin){
        loginLinks = <ul className="navbar-nav">
                      Welcome {prop.state[0]?.userName}  <li><a className="dropdown-item" href="/logout">LogOut</a></li>
                    </ul>
    }else{
        loginLinks = <ul className="navbar-nav">
                        <li><a className="dropdown-item" href="/login">SignIn</a></li>
                        <li><a className="dropdown-item" href="/register">SignUp</a></li>
                    </ul>
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo" width="100" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <MenuComponents state={prop} />
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    
                    {loginLinks}                    
                    
                </div>
            </div>
        </nav>     
    );
}

export default HeaderComponents;