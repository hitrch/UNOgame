import React, { Component } from 'react';
import './List.css';

class List extends Component {

    componentDidMount() {
    }

    render() {
        return(
            <div id = {'chats'}>
                <div id = {'buttons'}>
                    <button id = {'refresh'}>Refresh</button>
                    <button id = {'newGame'}>+</button>
                </div>
                <div style = {{display : 'inline-block'}}>
                    here should be the list from avivable games
                </div>
            </div>
        );
    }
}

export default List;