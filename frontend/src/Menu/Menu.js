import React, { Component } from 'react';
import List from '../List/List';
import Chat from '../Chat/Chat';
import Game from "../Game/Game";
import './Menu.css';
import * as loginSelectors from '../store/login/reducer';
import * as gameSelectors from '../store/game/reducer';
import { connect } from 'react-redux';


class Menu extends Component {

    render() {
        const Body = () => (
            <div id = {'game'}>
                <div id = {'header'}>
                    Greetings treveler  {this.props.userInfo}
                </div>
                <div id = {'lobby'}>
                    <div id = {'list'}>
                        <List/>
                    </div>
                    <div id = {'chat'}>
                        <Chat/>
                    </div>
                </div>
            </div>
        );
        return(
            <div>
                {this.props.gameChosen ?
                    <Game/> :
                    <Body/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        userInfo: loginSelectors.getUser(state),
        gameChosen: gameSelectors.getGame(state)
    };
}

export default connect(mapStateToProps)(Menu);