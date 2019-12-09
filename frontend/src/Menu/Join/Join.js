import React, { Component } from 'react';
import autoBind from "react-autobind";
import * as menuActions from "../../store/menu/actions";
import { connect } from 'react-redux';
import './Join.css';

class Join extends Component{
    constructor(props) {
        super(props);
        autoBind(this);
    }

    onButtonClick(game) {
        console.log(game);
    }

    closeLoadGame() {
        this.props.dispatch(menuActions.joinClose());
    }

    render() {
        return(
            <div id = {'join'}>
                <p>Please choose game to join</p>
                <div id = {'avivable_games'}>
                    {this.props.user.joins.map((game, index) => <div id = {index}><button id = {'game_list'} onClick={() => this.onButtonClick(game)}>{game}</button></div>)}
                </div>
                <button id = {'load_close'} onClick={this.closeLoadGame}>Close</button>
            </div>
        );
    }
}

export default connect()(Join);