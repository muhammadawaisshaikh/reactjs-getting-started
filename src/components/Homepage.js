import React from 'react';

class Homepage extends React.Component{

    constructor(props) {
        super(props);
 
        this.state = {
            data: ''
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
    }


    render() {
        return(
            <div>
                <p>Homepage</p>
            </div>
        );
    }
}

export default Homepage;