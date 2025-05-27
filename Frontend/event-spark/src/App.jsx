import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Homepage from './components/Homepage';

export default function App() {
  const [isLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}
