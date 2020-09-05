import {UserActionTypes} from './actionTypes';

export const initialState={
    user_name:localStorage.getItem('mars_username')||null,
    is_authenticated:localStorage.getItem('mars.refresh_token')?true:false,
    isSidebarOpen:false
};

export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case UserActionTypes.userName:{
            return {
                ...state,
                user_name:action.payload
            }
        }
        case UserActionTypes.isAuthenticated:{
            return {
                ...state,
                is_authenticated:action.payload
            }
        }
        case UserActionTypes.isSidebarOpen:{
            return {
                ...state,
                isSidebarOpen:action.payload
            }
        }
        case UserActionTypes.logout:{
            return {
                ...state,
                is_authenticated:false
            }
        }
        default: return state;
    }
}