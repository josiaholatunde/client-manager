import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import AppNavBar from './layout/navbar/AppNavBar';
import Dashboard from './layout/Dashboard';
import AddClient from './clients/AddClient';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <AppNavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/client/add" component={AddClient} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
