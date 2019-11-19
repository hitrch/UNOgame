import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Home extends Component {
    constructor(props) {
        super(props);
    }

    onTelegramAuth(user) {
        console.log(user);
    }

    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = "function onTelegramAuth(user) {\n" +
            "    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');\n" +
            "  }";
        document.body.appendChild(s);
    }

    render() {
        return (
            <div className="App">
                    <h6>
                        Welcome to UNOgame
                    </h6>
            </div>
        );
    }
}
export default Home;