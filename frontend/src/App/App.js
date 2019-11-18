import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import List from '../pages/List';
import Login from '../pages/Login';


import {render} from "react-dom";
import TelegramLoginButton from "react-telegram-login";


const handleTelegramResponse = response => {
    console.log(response);
};

render(
    <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="UNOgBot"/>,
    document.getElementById('telegramButton')
);



class App extends Component {

    componentDidMount() {
        const log = document.createElement("div");
        log.id = 'login';
        log.innerHTML = "<script async src='https://telegram.org/js/telegram-widget.js?7' data-telegram-login='UNOgBot' data-size='large' data-onauth='onTelegramAuth(user)' data-request-access='write'></script>";
        document.body.prepend(log);
    }

    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/list' component={List}/>
                </Switch>
            </div>
        );
        return (
            <Switch>
                <App/>
            </Switch>
        );
    }
}

export default App;