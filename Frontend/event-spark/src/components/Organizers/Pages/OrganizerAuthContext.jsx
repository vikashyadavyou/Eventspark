// src/components/Organizers/Pages/OrganizerAuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const OrganizerAuthContext = createContext();

export const OrganizerAuthProvider = ({ children }) => {
  const [organizer, setOrganizer] = useState(null);

  useEffect(() => {
    // Check for token in localStorage on load
    const storedData = localStorage.getItem("organizerData");
    if (storedData) {
      setOrganizer(JSON.parse(storedData));
    }
  }, []);

  const login = (organizerData) => {
    localStorage.setItem("organizerData", JSON.stringify(organizerData));
    setOrganizer(organizerData);
  };

  const logout = () => {
    localStorage.removeItem("organizerData");
    setOrganizer(null);
  };

  const isLoggedIn = !!organizer;

  return (
    <OrganizerAuthContext.Provider value={{ organizer, login, logout, isLoggedIn }}>
      {children}
    </OrganizerAuthContext.Provider>
  );
};

export const useOrganizerAuth = () => useContext(OrganizerAuthContext);
