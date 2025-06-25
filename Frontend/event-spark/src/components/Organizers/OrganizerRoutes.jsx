import React from "react";
import { Routes, Route } from "react-router-dom";
import OrganizerAuth from "./OrganizerAuth";
import Dashboard from "./Pages/Dashboard";
import OrganizerProfile from "./Pages/OrganizerProfile";
import MyEvents from "./Pages/MyEvents";
import CreateEvent from "./Pages/CreateEvent";
import OrganizerNavbar from "./OrganizerNavbar"; // if it's outside `pages`
import OrganizerLayout from "./OrganizerLayout"; // assuming layout is in parent folder
import { OrganizerAuthProvider } from "./Pages/OrganizerAuthContext";

export default function OrganizerRoutes() {
  return (
    <OrganizerAuthProvider>
      <Routes>
        <Route path="auth" element={<OrganizerAuth />} />
        <Route path="/" element={<OrganizerLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<OrganizerProfile />} />
          <Route path="my-events" element={<MyEvents />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </OrganizerAuthProvider>
  );
}
