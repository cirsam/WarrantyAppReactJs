import React,{useState,useEffect} from 'react';
import HeaderComponents from './HeaderComponent.js';
import FooterComponents from './FooterComponent.js';
import MainContentComponents from './MainContentComponent.js';

const Webpages = () => {
    const [state,setState]= useState([]);
   
    //We get the localstorage at initialization
    useEffect(() => {
        setState(JSON.parse(window.localStorage.getItem('state')));
      }, []);
    
    //We track the changes in state and add it to localstorage
    useEffect(() => {
        window.localStorage.setItem('state', JSON.stringify(state));   
    }, [state]); 

    const handleStateFromMain = (stateItems)=>{
        setState(stateItems);      
    }

    return(
        <div className='App'>
        <HeaderComponents state={state} />
        <MainContentComponents setState={handleStateFromMain} state={state} />
        <FooterComponents />
        </div>
    );
};

export default Webpages;