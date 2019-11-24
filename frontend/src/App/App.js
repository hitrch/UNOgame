import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login'
import Game from '../Game/Game'

class App extends Component {

    render() {
        const App = () => (
            <div>
                <Login/>
                <Game/>
            </div>
        );
        return (
            <App/>
        );
    }
}

export default App;