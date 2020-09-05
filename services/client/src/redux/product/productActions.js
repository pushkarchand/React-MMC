import {ProductActionTypes} from './actionTypes';
export function setProductSnapShotList(payload){
    return {
        type:ProductActionTypes.snapShotList,
        payload:payload
    }
}

export function setSelectedWidget(payload){
    return {
        type:ProductActionTypes.selectedSnapShots,
        payload:payload
    }
}

export function setProductName(payload){
    return {
        type:ProductActionTypes.productName,
        payload:payload
    }
}

export function setProductURL(payload){
    return {
        type:ProductActionTypes.productURL,
        payload:payload
    }
}