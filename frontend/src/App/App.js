import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import List from '../pages/List';

class App extends Component {
    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.innerHTML = "Telegram.Passport.createAuthButton('telegram_passport_auth', {\n" +
            "            bot_id:       123456, // place id of your bot here\n" +
            "            scope:        {data: [{type: 'id_document', selfie: true}, 'address_document', 'phone_number', 'email'], v: 1},\n" +
            "            public_key:   '-----BEGIN PUBLIC KEY----- ...', // place public key of your bot here\n" +
            "            nonce:        'ab2df83746a87d2f3bd6...', // place nonce here\n" +
            "            callback_url: 'https://unog.herokuapp.com/callback/' // place callback url here\n" +
            "        });";
        this.instance.appendChild(s);
    }

    render() {
        const App = () => (

            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/list' component={List}/>
                </Switch>
            </div>
        );
        return (
            <Switch>
                <App/>
            </Switch>
        );
    }
}

export default App;