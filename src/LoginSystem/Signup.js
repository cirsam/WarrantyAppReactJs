import React, { useState}  from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import handleSignup from '../EndPointServices/signup';

const Signup = (prop) => {

    const [state,setState] = useState([]);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");

    const hangleSignupSubmit = (event)=> {
        event.preventDefault();

        const usercredentials = {'username':userName,'email':userEmail,'password':userPassword,'confirmPassword':userConfirmPassword};
        const result = handleSignup(usercredentials);

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
                setError("The user with the username "+ userName +" already exists in the system");
            }else if(error===500){
                setError("There was a problem on the server");
            }

            console.error('There was an error!', error);
        });
    }

    if(state.length!==0 || (window.localStorage.getItem('state')!=='[]' && window.localStorage.getItem('state')!=='null'))
    {
       return <Redirect to="/login" />
    }

    return(
        <form className='col-md-12 col-lg-8' onSubmit={hangleSignupSubmit}>
            <div>{error}</div>
            <h1>Login</h1>          
            <div className="row col-6">
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Username</span>
                    <input type="text" className="form-control" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>
            <div className="row col-6">
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                    <input type="email" className="form-control" name="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
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
                    <span className="input-group-text" id="inputGroup-sizing-sm">ConfirmPassword</span>
                    <input type="password" className="form-control" value={userConfirmPassword} onChange={(e) => setUserConfirmPassword(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>
            <div className="row col-6">
                <div className="input-group">
                    <input type="submit" className="btn btn-primary" value="Signup" name='SignUp' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>
        </form>
    );
    
}

export default Signup;