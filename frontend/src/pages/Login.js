import React, { Component } from 'react';

class Login extends Component {

    user;

    constructor(props) {
        super(props);
    }

    onTelegramAuth(user){
        console.log(user);
    }

    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = "function onTelegramAuth(user) {\n" +
            "    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');\n" +
            "  }";
        this.instance.appendChild(s);
    }

    render() {
        return <div ref={el => (this.instance = el)} />;
    }


}

export default Login;