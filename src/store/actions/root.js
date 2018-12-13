import { LOGIN } from './actionTypes';

export const logIn = (email, password) => {
    return {
        type: LOGIN,
        email: email,
        password: password
    };
}