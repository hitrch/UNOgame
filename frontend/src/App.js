import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login'
import Game from './Game/Game'
import * as loginSelectors from './store/login/reducer';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        const App = () => (
            <div id = {'app'}>
                {!this.props.isLogin ?
                    //<Login/> :
                    <Game/>: <div></div>
                }
            </div>
        );
        return (
            <App/>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogin: loginSelectors.isLogged(state)
    };
}

export default connect(mapStateToProps)(App);