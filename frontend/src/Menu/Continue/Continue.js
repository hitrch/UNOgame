import React, { Component } from 'react';
import './Continue.css'
import { connect } from 'react-redux';
import autoBind from "react-autobind";
import * as menuActions from '../../store/menu/actions';


class LoadGame extends Component{

    constructor(props) {
        super(props);
        autoBind(this);
    }

    onButtonClick(game) {
        console.log(game);
    }

    closeLoadGame() {
        this.props.dispatch(menuActions.loadGameClose());
    }

    render() {
        return(
            <div id = {'continue'}>
                <p>Please choose your game</p>
                <div id = {'avivable_games'}>
                    {this.props.user.games.map((game, index) => <div id = {index}><button id = {'game_list'} onClick={() => this.onButtonClick(game)}>{game}</button></div>)}
                </div>
                <button id = {'load_close'} onClick={this.closeLoadGame}>Close</button>
            </div>
        );
    }
}

export default connect()(LoadGame);

