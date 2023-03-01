import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// history

//Pages
import { Login } from '../pages/login'
import Profile from '../pages/profile';
import { SignUp } from '../pages/signUp'
import Welcome from '../pages/welcome'

export const RoutesElement = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </Router>
    )
} 