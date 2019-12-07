import Immutable from 'seamless-immutable';
import * as types from './actionTypes';


const initialState = Immutable({
    Logged: false,
    User: undefined
});

export default function reduce(state = initialState, action = {}) {

    switch (action.type) {
        case types.LOGGED_IN: {
            console.log(action.user);
            return state.merge({
                Logged: true,
                User: action.user
            });
        }
        default:
            return state;
    }
}

//selectors

export  function isLogged(state) {
    return state.login.Logged;
}

export function getUser(state) {
    return state.login.User;
}