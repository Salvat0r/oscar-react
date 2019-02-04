import React, { Component } from 'react';

import Carousel from './components/Carousel';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React</h1>
        </header>
        <Carousel />
      </div>
    );
  }
}

export default App;
