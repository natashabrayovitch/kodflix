import React, { Component } from 'react';
import summer1 from './summer1.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={summer1} alt='summer1' />
        <br /><br />< br/>
        <div className='container'>
          <div className='item'>Queen</div>
          <div className='item' >Milke</div>
          <div className='item' >Julia</div>
      </div>
        <div className='container'>
          <div className='item'>Yulia</div>
          <div className='item' >Eva</div>
          <div className='item' >Emma</div>
      </div>

    </div>
    );
  }
}

export default App;
