// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Participants/Navbar';
// import Auth from './components/Participants/Auth';
// import Homepage from './components/Participants/Homepage';
// import UserProfile from './components/Participants/UserProfile'
// import RegistrationForm from './components/Participants/RegistrationForm';
// import { AuthProvider } from './components/Participants/ParticipantAuthContext'; // ✅ Import AuthProvider
// import OrganizerAuth from './components/Organisers/OraganizerAuth'



// export default function App() {
//   return (


// // Oragnizer's Route
//     // <Router>
//     //      <Routes>
//     //        <Route path="/organizer/auth" element={<OrganizerAuth/>} />
//     //      </Routes>
//     //    </Router>

// // Participant's Routes


//     <AuthProvider>
//       <Router>
//         <Navbar /> 
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/profile" element={<UserProfile />} />
//           <Route path="/Register" element={<RegistrationForm />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Participant Components
import Navbar from './components/Participants/Navbar';
import Auth from './components/Participants/Auth';
import Homepage from './components/Participants/Homepage';
import UserProfile from './components/Participants/UserProfile';
import RegistrationForm from './components/Participants/RegistrationForm';
import { AuthProvider } from './components/Participants/ParticipantAuthContext';

// Organizer Components
import OrganizerAuth from './components/Organisers/OraganizerAuth';
import OrganizerDashboard from './components/Organisers/OrganizerDashboard';

// Shared Landing Page
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Organizer Routes (no need to wrap in AuthProvider) */}
         {/* Organizer Routes (No AuthProvider required) */}
        <Route path="/organizer/auth" element={<OrganizerAuth />} />
        <Route path="/organizer/dashboard" element={<OrganizerDashboard/>}/>
        {/* <Route path="/organizer/auth" element={<OrganizerAuth />} /> */}

        {/* Participant Routes */}
        <Route
          path="/participant/*"
          element={
            <AuthProvider>
              <ParticipantRoutes />
            </AuthProvider>
          }
        />
      </Routes>
    </Router>
  );
}

// ✅ Grouped Participant Routes inside AuthProvider
function ParticipantRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="register" element={<RegistrationForm />} />
        {/* Default redirect to home */}
        <Route path="*" element={<Navigate to="homepage" />} />
      </Routes>
    </>
  );
}
