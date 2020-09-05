import {constants} from '../utils/constants';
import {fetchRefreshToken} from './authService';

const getAccessToken = () =>  "Bearer " + localStorage.getItem(constants.access_token);


export async function getApi (url) {
    console.log(url)
    try{
        let response = await fetch(`${process.env["BASE_URL"]}/${url}`,{method:"GET",headers:{Authorization:getAccessToken}});
        let data = await response.json();
        return data;
    } catch(error){
        throw new Error(error);
    }
}

export async function postApi (url,argBody) {
    try{
        let response = await fetch(`${process.env["BASE_URL"]}/${url}`,
                {method:"POST",body:JSON.stringify(argBody),
                headers:{Authorization:getAccessToken}});
        let data = await response.json();
        return data;
    } catch(error){
        throw new Error(error);
    }
}

export async function updateApi (url,argId,argBody) {
    try{
        let response = await fetch(`${process.env["BASE_URL"]}/${url}?id=${argId}`,{method:"POST",body:JSON.stringify(argBody)});
        let data = await response.json();
        return data;
    } catch(error){
        throw new Error(error);
    }
}
  