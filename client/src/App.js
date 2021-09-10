import './App.css';
import { Route } from 'react-router-dom';
import {Home} from './components/home/Home.jsx'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;


