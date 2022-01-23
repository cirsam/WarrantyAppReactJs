import ApiService from "./apiService";

async function handleLogout (){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*", 'Accept': 'application/json','content-type':'application/text'}
    };
    
    return ApiService('https://localhost:44357/api/login/logout?returnUrl=/login',requestOptions);
}

export default handleLogout;