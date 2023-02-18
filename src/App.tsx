import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login';
import Welcome from './pages/welcome';

function App() {
  return (
    <div className="App">

        <Router>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
