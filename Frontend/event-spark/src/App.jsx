// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ParticipantRoutes from "./components/Participants/ParticipantRoutes";
import OrganizerRoutes from "./components/Organizers/OrganizerRoutes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/participant/*" element={<ParticipantRoutes />} />
        <Route path="/organizer/*" element={<OrganizerRoutes />} />
      </Routes>
    </Router>
  );
}
