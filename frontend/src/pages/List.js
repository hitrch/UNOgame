import React, { Component } from 'react';

class List extends Component {
    // Initialize the state
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/api/getList')
            .then(res => res.json())
            .then(list => this.setState({ list }))
    };

    render() {
        const { list } = this.state;

        return (
            <div className="App">
                <h6>List of Items</h6>
                {/* Check to see if any items are found*/}
                {list.length ? (
                    <div>
                        {/* Render the list of items */}
                        {list.map((item) => {
                            return(
                                <div>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <h6>No List Items Found</h6>
                    </div>
                )
                }
            </div>
        );
    }
}

export default List;