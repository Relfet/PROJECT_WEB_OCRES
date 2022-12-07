import React, { Component } from 'react';
import './App.css';
import Calendrier from './components/Calendrier';
import Clock from './components/Clock';
import Weather from './components/Weather';
import Slider from './components/Slider';
import Yoda from './components/Yoda';
import Graph from './components/Graph';





class App extends Component {
  render() {
    return (       // appel les fonctions 
      <div className="App">
        <div className='case1'>
          <Slider />
          <div className="case2">
            <Calendrier />
            <Clock />
            <Weather />
          </div>
        </div>
        <div className='case3'>
          <Yoda /> 
        </div>
        <div classname='case4'>
        <Graph/>
        </div>
      </div>
    )
  }
}


export default App;
