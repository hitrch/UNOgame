import React, { Component } from 'react';
import List from '../List/List';
import Chat from '../Chat/Chat';
import './Game.css'


class Game extends Component {

    componentDidMount() {

    }

    render() {
        const Body = () => (
            <div id = {'lobby'}>
                <div id = {'list'}>
                    <List/>
                </div>
                <div id = {'chat'}>
                    <Chat/>
                </div>
            </div>
        );
        return(
            <Body/>
        );
    }
}

export default Game;