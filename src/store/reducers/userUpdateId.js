import { USER_UPDATE_ID } from '../constants/actionTypes';

export default (userUpdateId = null, action) => {
    switch (action.type) {
        case USER_UPDATE_ID:
                return action.payload;
        default:
            return userUpdateId;
    }
}