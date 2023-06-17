import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import {
  Home,
  Plan,
  Registre,
  Exploitation,
  SingleRegistre,
  Error,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/registre">
          <Registre />
        </Route>
        <Route exact path="/exploitation">
          <Exploitation />
        </Route>
        <Route exact path="/plan">
          <Plan />
        </Route>
        <Route exact path="/registre/:id" children={<SingleRegistre />} />
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
