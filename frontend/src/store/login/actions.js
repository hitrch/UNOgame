import * as types from './actionTypes';

export function logIn(newUser) {
    return({ type: types.LOGGED_IN, user: newUser });
}