import React, { Component } from 'react';
import './Chat.css';
import Playground from './Playground/Playground'
import Players from './Players/Players'
import Cards from "./Cards/Cards";

class Chat extends Component {
    componentDidMount() {
    }

    render() {
        return(
            <div id = {'innerChat'}>
                <Playground/>
                <Players/>
                <Cards/>
            </div>
        );
    }
}

export default Chat;