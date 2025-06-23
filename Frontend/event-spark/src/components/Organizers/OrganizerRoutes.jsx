// src/components/Organisers/OrganizerRoutes.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import OrganizerAuth from "./OrganizerAuth";
import Dashboard from "./Pages/Dashboard";
import OrganizerNavbar from "./OrganizerNavbar";
import OrganizerProfile from "./Pages/OrganizerProfile";
import MyEvents from "./Pages/MyEvents";
import CreateEvent from "./Pages/CreateEvent"
import OrganizerLayout from "./OrganizerLayout";
export default function OrganizerRoutes() {
  return (
    <Routes>
      {/* ❌ No Navbar on this route */}
      <Route path="auth" element={<OrganizerAuth />} />

      {/* ✅ All these routes have OrganizerNavbar via OrganizerLayout */}
      <Route path="/" element={<OrganizerLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<OrganizerProfile />} />
        <Route path="my-events" element={<MyEvents />} />
        <Route path="create-event" element={<CreateEvent />} />

        {/* Fallback for unknown organiser routes */}
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
