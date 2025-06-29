// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from './ParticipantAuthContext';

// export default function Navbar() {
//   const { isLoggedIn } = useAuth();

//   return (
//     <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
//       <Link to="/" className="text-xl font-bold text-blue-600">EventSpark</Link>
//       <div className="space-x-4 flex items-center">
//         <Link to="/participant/homepage" className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
//           Home
//         </Link>
//         {isLoggedIn ? (
//           <Link to="/participant/profile" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Profile
//           </Link>
//         ) : (
//           <Link to="/participant/auth" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Login / Sign-Up
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// }


// src/components/Participants/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./ParticipantAuthContext";

export default function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/participant/homepage" className="text-xl font-bold text-blue-600">
        EventSpark
      </Link>

      <div className="space-x-4">
        {!isLoggedIn ? (
          <Link
            to="/participant/auth"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login / Sign Up
          </Link>
        ) : (
          <Link to="/participant/profile" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Profile
          </Link>
        )}
      </div>
    </nav>
  );
}
