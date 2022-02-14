import React, { useState}  from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const DashBoard = (prop) => {
    const [state,setState] = useState([]);
    let userActions;
    console.log(prop)
    if(prop.stateObject.state!==null && prop.stateObject.state.length!==0 && prop.stateObject.state[0]?.isLoggedin){
        userActions = <div>Welcome to your dashboard {prop.stateObject.state[0]?.userId}</div>
    }else{
        userActions = <div>You need to login to access this page</div>
    }
    
return(
        <div>
            <h1>{userActions} </h1>
        </div>
    );
}
export default DashBoard;