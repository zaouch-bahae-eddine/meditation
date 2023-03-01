import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { RoutesElement } from './config/Routes';


function App() {
  return (
    <div className="App">
      <RoutesElement />

    </div>
  );
}

export default App;
