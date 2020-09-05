import {UserActionTypes} from './actionTypes';
import {userReducer,initialState} from './userReducer';
import {testcontstants} from '../utils/test_constant';

describe('Filter reducer',()=>{
    it('should return default state',()=>{
        const newState = userReducer(undefined, {});
        expect(newState).toEqual(initialState);
    })
})