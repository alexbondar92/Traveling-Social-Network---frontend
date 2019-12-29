import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { HomeModule } from '../HomeModule';
import { LoginModule } from '../LoginModule';
import { RegisterModule } from '../RegisterModule';
import { NotFound } from '../NotFound';
import {history} from '../_helpers';
import {PrivateRoute} from '../_helpers';

function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
      super(props);

      history.listen((location, action) => {
          // clear alert on location change
          this.props.clearAlerts();
      });
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={App_old} />
            <Route exact path="/login" component={LoginModule} />
            <Route exact path="/register" component={RegisterModule} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
