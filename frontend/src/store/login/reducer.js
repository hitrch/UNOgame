import Immutable from 'seamless-immutable';
import * as types from './actionTypes';


const initialState = Immutable({
    Logged: false,
    User: undefined
});

export default function reduce(state = initialState, action = {}) {

    switch (action.type) {
        case types.LOGGED_IN: {
            console.log(action);
            return state.merge({
                Logged: true
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