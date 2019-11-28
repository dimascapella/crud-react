import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from '../src/components/Home';
import Data from '../src/components/Data';
import Edit from '../src/components/Edit';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="nav-link" to="/">CRUD - React</Link>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">Data</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/form" component={Data} />
      <Route path="/edit" component={Edit} />
    </Router>
  );
}

export default App;
