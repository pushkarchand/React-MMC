import {UserActionTypes} from './actionTypes';

export const setUserName=(userName)=>{
    return {
        type:UserActionTypes.userName,
        payload:userName
    }
}

export const setIsSidebarOpen=(isSidebarOpen)=>{
    return {
        type:UserActionTypes.isSidebarOpen,
        payload:isSidebarOpen
    }
}

export const setIsAuthenticated=(payload)=>{
        return {
            type:UserActionTypes.isAuthenticated,
            payload:payload
        }
}

export const logout=()=>{
    return {
      type:UserActionTypes.logout
    }
}