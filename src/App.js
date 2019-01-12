import React, { Component } from 'react';
import summer1 from './coverImages/summer1.jpeg';
import summer2 from './coverImages/summer2.jpeg';
import summer3 from './coverImages/summer3.jpeg';
import summer4 from './coverImages/summer4.jpeg';
import summer5 from './coverImages/summer5.jpeg';
import summer6 from './coverImages/summer6.jpeg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br /><br />< br />
        <div className='container'>
          <div className='item'>
            <img src={summer1} alt='summer1' />
            <div className='overlay'>
              <h1>Queen</h1>
            </div>
          </div>
          <div className='item'>
            <img src={summer2} alt='summer2' />
            <div className='overlay'>
              <h1>Milke</h1>
            </div>
          </div>
          <div className='item'>
            <img src={summer3} alt='summer3' />
            <div className='overlay'>
              <h1>Julia</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={summer4} alt='summer4' />
            <div className='overlay'>
              <h1>Yulia</h1>
            </div>
          </div>
          <div className='item' >
            <img src={summer5} alt='summer5' />
            <div className='overlay'>
              <h1>Eva</h1>
            </div>
          </div>
          <div className='item' >
            <img src={summer6} alt='summer6' />
            <div className='overlay'>
              <h1>Emma</h1>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
