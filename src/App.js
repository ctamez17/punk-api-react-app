import React from 'react';
// import logo from './logo.svg';
import './App.css';
//import Fetch from './Components/Fetch';
import ReactDOM from 'react-dom'



function App() {
  let state = {
    isClicked : false
  }

  let buttonElement = <button onClick={state.isClicked != state.isClicked}>
    "Click me!"
  </button>

  ReactDom.render(
    buttonElement
  );
}



export default App;
