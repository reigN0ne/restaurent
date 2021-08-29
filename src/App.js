import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Category, Header, Home, Subcategory } from './components/index';

function App() {
  return (
    <div className="app">
      <Router>
        <header>
          <Header />
        </header>
        <Switch>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/subcategory">
            <Subcategory />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
