// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ParticipantRoutes from "./components/Participants/ParticipantRoutes";
import OrganizerRoutes from "./components/Organizers/OrganizerRoutes";

// ⬇️ Import both context providers
import { AuthProvider } from "./components/Participants/ParticipantAuthContext";
import { OrganizerAuthProvider } from "./components/Organizers/Pages/OrganizerAuthContext";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* ✅ Wrap Participant section in AuthProvider */}
        <Route
          path="/participant/*"
          element={
            <AuthProvider>
              <ParticipantRoutes />
            </AuthProvider>
          }
        />

        {/* ✅ Wrap Organizer section in OrganizerAuthProvider */}
        <Route
          path="/organizer/*"
          element={
            <OrganizerAuthProvider>
              <OrganizerRoutes />
            </OrganizerAuthProvider>
          }
        />
      </Routes>
    </Router>
  );
}
