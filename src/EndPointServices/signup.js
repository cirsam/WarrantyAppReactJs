import ApiService from "./apiService";

async function handleSignup (userCredentials){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*", 'Accept': 'application/json','content-type':'application/text'},
        body: JSON.stringify({
            Username:userCredentials.username,
            Email:userCredentials.email,
            Password:userCredentials.password,
            ConfirmPassword:userCredentials.confirmPassword
        }),
        mode:'cors'
    };
    
    return ApiService('https://localhost:44357/api/login/register',requestOptions);
}

export default handleSignup;