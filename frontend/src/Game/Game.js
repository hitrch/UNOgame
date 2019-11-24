import React, { Component } from 'react';
import List from '../List/List';



class Game extends Component {

    componentDidMount() {

    }

    render() {
        const Body = () => (
            <div id = {'list'}>
                <List/>
            </div>
        );
        return(
            <Body/>
        );
    }
}

export default Game;