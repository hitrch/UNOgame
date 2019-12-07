import React, { Component } from 'react';
import List from '../List/List';
import Chat from '../Chat/Chat';
import './Game.css';
import * as loginSelectors from '../store/login/reducer';
import { connect } from 'react-redux';


class Game extends Component {

    componentDidMount() {

    }

    render() {
        const Body = () => (
            <div id = {'game'}>
                <div id = {'header'}>
                    Greetings treveler: {this.props.userInfo}
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
            <Body/>
        );
    }
}

function mapStateToProps(state) {
    return{
        userInfo: loginSelectors.getUser(state).first_name
    };
}

export default connect(mapStateToProps)(Game);