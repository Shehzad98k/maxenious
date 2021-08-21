import { combineReducers } from 'redux';
import users from './reducers/users'; 
import userUpdateId from './reducers/userUpdateId'; 

export default combineReducers({
    users,
    userUpdateId,
});