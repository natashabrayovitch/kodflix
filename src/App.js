import React, { Component } from 'react';
import Intro from './Intro';
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
          <Intro name='Queen' logo={summer1} />
          <Intro name='Milke' logo={summer2} />
          <Intro name='Julia' logo={summer3} />
        </div>
        <div className='container'>
          <Intro name='Yulia' logo={summer4} />
          <Intro name='Eva' logo={summer5} />
          <Intro name='Emma' logo={summer6} />
        </div>
      </div>
    );
  }
}

export default App;
