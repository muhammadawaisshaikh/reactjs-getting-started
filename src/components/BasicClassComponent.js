import React from 'react';

class BasicClassComponent extends React.Component{

    constructor(props) {
        super(props);
 
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        return(
            <div>
                <div className="cards">
                    <p>Basic Class Component</p>
                </div>
            </div>
        );
    }
}

export default BasicClassComponent;