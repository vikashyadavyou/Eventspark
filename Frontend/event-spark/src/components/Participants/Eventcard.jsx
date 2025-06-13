import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EventCard({ event }) {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate(`/register/`, { state: { event } });
  };

  return (
    <div className="w-80 h-[420px] bg-white p-4 rounded shadow overflow-hidden flex flex-col">
      <div className="h-40 w-full overflow-hidden rounded">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col mt-2 overflow-hidden">
        <h2 className="text-xl font-bold truncate">{event.title}</h2>
        <p className="text-gray-600 text-sm">{event.date}</p>
        <p className="mt-2 text-sm text-gray-700 line-clamp-3 overflow-hidden">
          {event.description}
        </p>
        <div className="mt-auto">
          <button
            onClick={handleRegisterClick}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
