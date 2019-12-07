import Immutable from 'seamless-immutable';
import * as types from './actionTypes';


const initialState = Immutable({
    Logged: false,
    User: undefined
});

export default function reduce(state = initialState, action = {}) {

    switch (action.type) {
        case types.LOGGED_IN: {

            let user = {
                id : action.user.id,
                first_name : action.user.first_name,
                last_name : action.user.last_name,
                username : action.user.username,
                photo_url :  action.user.photo_url,
                games : []
            };

            console.log(user);
            return state.merge({
                Logged: true,
                User: user
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