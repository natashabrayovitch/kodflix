
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import Details from './Details';
import NotFound from './NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <h3>SS 18 collection</h3>
        <h1>Summer Solstice</h1>
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:galleryId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
