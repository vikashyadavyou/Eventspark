// src/components/Organisers/OrganizerAuth.jsx
import React, { useState } from "react";

export default function OrganizerAuth() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    organisationName: "",
    email: "",
    phone: "",
    password: "",
  });

  const toggleForm = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in as organiser:", formData);
    } else {
      console.log("Signing up organiser:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-orange-50 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md border border-green-300">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          {isLogin ? "Organiser Login" : "Organiser Signup"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Organisation Name
              </label>
              <input
                type="text"
                name="organisationName"
                value={formData.organisationName}
                onChange={handleChange}
                className="mt-1 block w-full border border-orange-400 rounded p-2"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-orange-400 rounded p-2"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone No</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-orange-400 rounded p-2"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border border-orange-400 rounded p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleForm} className="text-orange-500 underline">
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
