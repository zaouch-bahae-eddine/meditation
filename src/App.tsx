import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login';
import { SignUp } from './pages/signUp';
import Welcome from './pages/welcome';

function App() {
  return (
    <div className="App">

        <Router>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
