// src/components/Participants/ParticipantRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Auth from "./Auth";
import UserProfile from "./UserProfile";
import RegistrationForm from "./RegistrationForm";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./ParticipantAuthContext";

export default function ParticipantRoutes() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route path="homepage" element={<Homepage />} />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PrivateRoute>
              <RegistrationForm />
            </PrivateRoute>
          }
        />
        {/* Fallback */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </AuthProvider>
  );
}
