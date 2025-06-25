// src/components/Organisers/OrganizerLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import OrganizerNavbar from "./OrganizerNavbar";
import { OrganizerAuthProvider } from "./Pages/OrganizerAuthContext";

export default function OrganizerLayout() {
  return (
    <OrganizerAuthProvider>
      <OrganizerNavbar />
      <main className="p-4">
        <Outlet />
      </main>
    </OrganizerAuthProvider>
  );
}
