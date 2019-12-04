import React, { Component } from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';
import autoBind from 'react-autobind';
import * as loginActions from '../store/login/actions'
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        ReactDOM.render(
            <TelegramLoginButton dataOnauth={this.handleTelegramResponse} botName="UNOgBot" />,
            document.getElementById('telegramButton')
        );
    }

    handleTelegramResponse = response => {
        console.log(this);
        //this.props.dispatch(loginActions.logIn());
        console.log(response);
    };

    render() {
        return(
            <div id = {'header'}>
                <div id = "greetings">Welcome to UNOgame</div>
                <div id = "telegramButton" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(Login);