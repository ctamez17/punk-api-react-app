import React, { Component } from 'react';
import './App.css';
import Beer from './Components/Beer/Beer';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      beers: [],
      isClicked: false
    }
  }

  likeBeer(){
    this.setState({isClicked: true})
  }

  componentDidMount(){
    console.log('Something happened - Component Did Mount')
    fetch('https://api.punkapi.com/v2/beers').then(response => response.json())
    .then(data => {
      this.setState({
        beers: data
      })
    }); //why convert from response to data?
  }

  componentDidUpdate(){
    console.log('BEERS', this.state.beers);
  }

  render(){
    return(
      <div className="App">
        <h1 className='app_title'>Pub API</h1>
        <ul className="beer_list">
          {this.state.beers.map(beer => (
            <Beer likeBeer={this.likeBeer} beer={beer}/> // <-- ??? Explain each beer?
          ))}
        </ul>
      </div>
    )
  }
}

export default App;







/*
OLD CODE
import React from 'react';
import ReactDOM from 'react-dom'
import BeerFetch from './BeerFetch'
// import './App.css';

const App = () => {
  return (<div>
    <BeerFetch />
  </div>);
}
 
export default App;
*/