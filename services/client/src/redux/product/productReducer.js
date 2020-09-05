import {ProductActionTypes} from './actionTypes';
import {widgets} from '../../utils/constants';

const initialState={
    snapShotList:widgets,
    selectedWidgets:[],
    productName:"",
    productURL:""
}

export const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case ProductActionTypes.productName:{
            return {
                ...state,
                productName:action.payload
            }
        }
        case ProductActionTypes.productURL:{
            return {
                ...state,
                productURL:action.payload
            }
        }
        case ProductActionTypes.selectedSnapShots:{
            return {
                ...state,
                selectedWidgets:action.payload
            }
        }
        case ProductActionTypes.snapShotList:{
            return {
                ...state,
                snapShotList:action.payload
            }
        }
        default: return state;
    }
}