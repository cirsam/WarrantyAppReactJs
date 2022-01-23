import React, { useState, useEffect}  from 'react';
import handleLogout from '../EndPointServices/logout.js';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const Logout = () => {
    const [error, setError] = useState(null);

    useEffect(() => {
        const result = handleLogout();

        result.then(async response=>{
            window.localStorage.clear();
            window.location="/home";           
        }).catch(error => {
            if(error===400){
                setError("There was a problem logging you in. Check username or password");
            }else if(error===500){
                setError("There was a problem on the server");
            }

            console.error('There was an error!', error);
        });
    });
    
    return(
        <div>
        {error}
        <Redirect to="/home" />
        </div>
    );
}

export default Logout;