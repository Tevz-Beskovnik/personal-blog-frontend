import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav';
import Body from './components/body';
import './App.css';

const App: FC = () => {
  return (
    <div className="main-container">
      <Router>
        <Nav/>
        <Body/>
      </Router>
    </div>
  );
}

export default App;
