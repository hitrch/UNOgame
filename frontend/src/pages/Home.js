import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Home extends Component {

    render() {
        return (
            <div className="App">
                <Link to={Home}>
                    <h6>
                        Welcome to UNOgame
                    </h6>
                </Link>
            </div>
        );
    }
}
export default Home;