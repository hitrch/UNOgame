import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    onTelegramAuth(user){
        console.log(user);
    }

    render() {
        const Log = () => (
            <script async src="https://telegram.org/js/telegram-widget.js?7" data-telegram-login="UNOgBot" data-size="small" data-onauth={this.onTelegramAuth(user)} data-request-access="write"/>
        );
        return (
            <Log/>
        );
    }
}

export default Login;