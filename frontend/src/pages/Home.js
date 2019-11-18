import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';


import { render } from 'react-dom';

const handleTelegramResponse = response => {
    console.log(response);
};

render(
    <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="UNOgBot" />,
    document.getElementById('telegramButton')
);

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = "function onTelegramAuth(user) {\n" +
            "    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');\n" +
            "  }";
        this.instance.appendChild(s);
    }

    render() {
        return (
            <div className="App">
                    <h6>
                        Welcome to UNOgame
                    </h6>

                <script async src="https://telegram.org/js/telegram-widget.js?7" data-telegram-login="UNOgBot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
                <div ref={el => (this.instance = el)} />
            </div>
        );
    }
}
export default Home;