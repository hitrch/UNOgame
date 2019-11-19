import React, { Component } from 'react';

class Login extends Component {

    user;

    constructor(props) {
        super(props);
    }

    onTelegramAuth(user){
        console.log(user);
    }

    componentDidMount() {

    }

    render() {
        const Log = '<script id = login async src="https://telegram.org/js/telegram-widget.js?7" data-telegram-login="UNOgBot" data-size="small" data-onauth=onTelegramAuth(user) data-request-access="write"></script>';
        return (
            <Log />
            );
    }


};

export default Login;