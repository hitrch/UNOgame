import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="App">
                <Link to={'./list'}>
                    <h1>
                        Welcome to UNOgame
                    </h1>
                    <script async src="https://telegram.org/js/telegram-widget.js?7" data-telegram-login="UNOgBot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"/>
                </Link>
            </div>
        );
    }
}
export default Home;