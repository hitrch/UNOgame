import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login'

class App extends Component {

    render() {
        const App = () => (
            <div>
                <Login/>
                <Switch>
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