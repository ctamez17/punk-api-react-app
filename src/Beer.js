import React, { Component, createContext } from 'react';


class Beer extends Component {
    
    render() { 
        return (
        <div>
            <p>{this.props.beerx.name}</p>
            {/* <p>{this.props.BeerMap.description}</p>
            <p>{this.props.BeerMap}</p> */}
        </div>);
    }
}
 
export default Beer;