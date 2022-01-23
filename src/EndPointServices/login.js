import ApiService from "./apiService";

async function handleLogin (userCredentials){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*", 'Accept': 'application/json','content-type':'application/text'},
        body: JSON.stringify({
            Username:userCredentials.username,
            Password:userCredentials.password
        }),
        mode:'cors'
    };
    
    return ApiService('https://localhost:44357/api/login',requestOptions);
}

export default handleLogin;