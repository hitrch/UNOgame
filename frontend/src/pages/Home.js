import React, { Component } from 'react';
import { Link } from 'react-router-dom';



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
        document.getElementById('login').appendChild(s);
    }

    render() {
        return (
            <div className="App">
                <div id = "login">
                    <script async src="https://telegram.org/js/telegram-widget.js?7" data-telegram-login="UNOgBot" data-size="small" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
                </div>
                    <h6>
                        Welcome to UNOgame
                    </h6>
            </div>
        );
    }
}
export default Home;