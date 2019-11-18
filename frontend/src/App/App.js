import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import List from '../pages/List';
import Login from '../pages/Login';



class App extends Component {
    render() {
        const App = () => (
            <div>
                <div id = 'login'>
                    <script async src="https://telegram.org/js/telegram-widget.js?7" data-telegram-login="UNOgBot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
                </div>
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