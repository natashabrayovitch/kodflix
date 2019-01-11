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
          </div>
          <div className='item'>
            <img src={summer2} alt='summer2' />
          </div>
          <div className='item'>
            <img src={summer3} alt='summer3' />
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={summer4} alt='summer4' />
          </div>
          <div className='item' >
            <img src={summer5} alt='summer5' />
          </div>
          <div className='item' >
            <img src={summer6} alt='summer6' />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
