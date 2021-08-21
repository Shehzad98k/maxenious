import { GET_USERS, CREATE_USER, UPDATE_USER, DELETE_USER } from '../constants/actionTypes';

//actions creators
export const getUsers = () => async (dispatch) => {
    const users = JSON.parse(localStorage.getItem('users'));
    dispatch({ type: GET_USERS, payload: users });
    
}

export const createUser = (newUser) => async (dispatch) => {
    let users = await JSON.parse(localStorage.getItem('users'));
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users));
    dispatch({ type: CREATE_USER, payload: newUser });
}


export const updateUser = (id, updatedUser) => async (dispatch) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const index = users.findIndex(user => user._id == id);
    users[index] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));
   
    dispatch({ type: UPDATE_USER, payload: updatedUser });
}


export const deleteUser = (id) => async (dispatch) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const index = users.findIndex(user => user._id === id);
    users.splice([index], 1);
    localStorage.setItem('users', JSON.stringify(users));

    dispatch({ type: DELETE_USER, payload: id });
}