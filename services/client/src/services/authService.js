import {constants} from '../utils/constants';

const getRefreshToken = () =>  "Bearer " + localStorage.getItem(constants.refresh_token);

export async function fetchRefreshToken(url) {
    try{
        let response = await fetch(`${process.env["REACT_APP_BACKEND_API"]}/refresh`,{
                                    method:"GET",
                                    headers: {Authorization: getRefreshToken()}});
        let data = await response.json();
        return data;
    } catch(error){
        throw new Error(error);
    }
}

export async function loginUser(username,password) {
    console.log(`${process.env["BASE_URL"]}`);
    try{
        let response = await fetch(`${process.env["REACT_APP_BACKEND_API"]}/login`,{
                                    method:"POST",
                                    headers:{"Content-type":"application/json"},
                                    body:JSON.stringify({username: username,
                                        password: password})});
        if(response.status===200){
            let data = await response.json();
            localStorage.setItem(constants.access_token, data["access_token"]);
            localStorage.setItem(constants.refresh_token, data["refresh_token"]);
            return data;
        } else if(response.status<400){
            throw new Error(response.statusText);
        }
    } catch(error){
        throw new Error(error);
    }
}