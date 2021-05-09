import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MovieTab from './pages/MovieTab/MovieTab';
import Header from './components/Header';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movie' component={MovieTab} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
