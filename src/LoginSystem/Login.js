import React, { useState}  from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import handleLogin from '../EndPointServices/login';

const Login = (prop) => {

    const [state,setState] = useState([]);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const hangleLoginSubmit = (event)=> {
        event.preventDefault();

        const usercredentials = {'username':userName,'password':userPassword};
        const result = handleLogin(usercredentials);

        result.then(async token=>{
            if(token!=null){
                const state = [
                    {"token":token},
                    {"isLoggedin":true}
                ];

                setState(state)
                prop.setState(state);
            };
        }).catch(error => {
            if(error===400){
                setError("There was a problem logging you in. Check username or password");
            }else if(error===500){
                setError("There was a problem on the server");
            }

            console.error('There was an error!', error);
        });
    }

    if(state.length!==0 || (window.localStorage.getItem('state')!=='[]' && window.localStorage.getItem('state')!=='null'))
    {
       return <Redirect to="/dashboard" />
    }

    return(
        <form className='col-md-12 col-lg-8' onSubmit={hangleLoginSubmit}>
            <div>{error}</div>
            <h1>Login</h1>
            <div className="row col-6">
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Username</span>
                    <input type="email" className="form-control" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>
            <div className="row col-6">
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                    <input type="password" className="form-control" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>   
            <div className="row col-6">
                <div className="input-group">
                    <input type="submit" className="btn btn-primary" value="Login" name='login' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>
        </form>
    );
    
}

export default Login;