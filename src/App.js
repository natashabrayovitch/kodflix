import React, { Component } from 'react';
import JinglesVA from './JinglesVA.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={JinglesVA} alt='JinglesVA' />
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
