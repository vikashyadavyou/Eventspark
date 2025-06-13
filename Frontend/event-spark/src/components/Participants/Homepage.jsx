import React from 'react';
import EventCard from './Eventcard'; // adjust path as needed

export default function Home() {
  const eventList = [
    {
      id: 1,
      title: 'Tech Conference 2025',
      description: 'Join us for the biggest tech event of the year.',
      date: 'July 20, 2025',
      image: 'https://source.unsplash.com/400x200/?conference',
    },
    {
      id: 2,
      title: 'Startup Expo',
      description: 'Meet startup founders and investors and co-founders.',
      date: 'August 12, 2025',
      image: 'https://source.unsplash.com/400x200/?startup',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {eventList.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

