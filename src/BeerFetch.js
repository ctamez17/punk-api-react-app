import React, { Component } from 'react';
import Beer from './Beer'

class BeerFetch extends Component {
    state = {
        beers: []
    }

    componentDidMount(){
        fetch('https://api.punkapi.com/v2/beers')
        .then((response) => {
            return response.json();
        })
        .then ((myJson) => {
            this.setState({beers: myJson});
            console.log(myJson)
        })
    };

    render() { 
        return (
            <div>{
                this.state.beers.map(beerx => {
                    return(<Beer key={beerx.id} beerx={beerx} />)
                })
            }
            </div>
            );
            
        }
        }
    

export default BeerFetch;