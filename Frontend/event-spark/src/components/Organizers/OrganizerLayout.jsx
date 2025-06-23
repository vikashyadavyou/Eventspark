// src/components/Organisers/OrganizerLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import OrganizerNavbar from "./OrganizerNavbar"; // Top navbar

export default function OrganizerLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <OrganizerNavbar />

      {/* Page Content */}
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
