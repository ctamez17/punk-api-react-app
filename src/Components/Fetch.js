import React from 'react'

const API = 'https://api.punkapi.com/v2/beers';

class Fetch extends React.Component{
    state = {
        beerlist: []
    }

componentDidMount() {
    try {
        fetch(API)
            .then(response=> response.json())
            .then(data => this.setState({
                const list = 
                this.state.beerlist.push(data)}
                ))
            // .then(data => console.log(data));
            console.log(this.state.beerlist);
    } catch (error) {
        console.log(error)
    }

}
    render() {
        return (
            <div>
                <h2>
                    Herro
                </h2>
                {this.state.beerlist.map(beer=>(
                    <li>
                        {beer.name}
                    </li>
                ))}
            </div>
        )
    }
}

export default Fetch
