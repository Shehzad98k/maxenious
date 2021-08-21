import { USER_UPDATE_ID } from '../constants/actionTypes';
//actions creators
export const userUpdateId = (id) => {
    return { type: USER_UPDATE_ID, payload: id };
}