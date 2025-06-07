import React, { useState } from 'react';

export default function EventCard({ event }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Registered for ${event.title}:`, formData);
    alert(`You are successfully registered for "${event.title}"!`);
    setFormData({});
    setShowForm(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-full max-w-md">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="text-xl font-semibold mt-4">{event.title}</h2>
      <p className="text-gray-500">{event.date}</p>
      <p className="mt-2 text-gray-700">{event.description}</p>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {showForm ? 'Close Form' : 'Register'}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 space-y-3 animate-fade-in"
        >
          {event.formFields.map((field) => (
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.label}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
