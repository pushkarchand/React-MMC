import {combineReducers} from 'redux'; 
import {userReducer} from './user/userReducer';
import {ProductReducer} from './product/productReducer';
const appReducer =combineReducers({
  user:userReducer,
  product:ProductReducer
})

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;