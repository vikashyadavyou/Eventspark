import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Homepage from './components/Homepage';
import UserProfile from './components/UserProfile';

export default function App() {
  const [isLoggedIn] = useState(true);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}
