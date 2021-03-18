import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />

        </Switch>
      </div>
    </Router >
  );
}

export default App;
