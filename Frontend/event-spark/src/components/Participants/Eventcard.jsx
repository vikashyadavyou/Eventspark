import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EventCard({ event }) {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate(`/participant/register/`, { state: { event } });
  };

  // 📷 Compute image URL safely
  const imageUrl = event?.coverImage?.trim()
    || event?.image?.trim()
    || `https://source.unsplash.com/400x200/?event&sig=${event?._id || Math.floor(Math.random() * 1000)}`;

  return (
    <div className="w-80 h-[440px] bg-white p-4 rounded shadow overflow-hidden flex flex-col">
      <div className="h-40 w-full overflow-hidden rounded">
        <img
          src={imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            if (!e.target.dataset.fallback) {
              
              e.target.src = 'https://picsum.photos/seed/fallback123/400/200';
              e.target.dataset.fallback = "true";
            }
          }}
        />
      </div>

      <div className="flex-1 flex flex-col mt-2 overflow-hidden">
        <h2 className="text-xl font-bold truncate">{event.title}</h2>
        <p className="text-gray-600 text-sm">
          {new Date(event.date).toDateString()}
        </p>
        <p className="text-gray-500 text-xs">
          Created by: {event.organizer?.name || 'Unknown'}
        </p>
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
