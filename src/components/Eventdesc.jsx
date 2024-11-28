import React, { useState } from 'react';

const EventDescription = () => {
  const [timeSlots, setTimeSlots] = useState([
    { slot: '9:00 AM - 11:00 AM', volunteers: 2, limit: 5 },
    { slot: '11:00 AM - 1:00 PM', volunteers: 3, limit: 5 },
  ]);

  const [eventProgress, setEventProgress] = useState('In Progress'); // Initial status
  const [volunteers, setVolunteers] = useState([
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  // Calculate the total number of volunteers from the time slots
  const totalVolunteers = timeSlots.reduce((sum, slot) => sum + slot.volunteers, 0);

  // Calculate the maximum number of volunteers for the entire event (sum of limits)
  const maxVolunteers = timeSlots.reduce((sum, slot) => sum + slot.limit, 0);

  const sendInvitations = () => {
    alert('Invitations sent to all registered volunteers!');
  };

  const sendReminders = () => {
    alert('Reminders sent to all registered volunteers!');
  };

  return (
    <div className="p-8 bg-gray-100">
      {/* Event Details */}
      <h1 className="text-3xl font-bold mb-4">Event Title: Volunteer Meetup</h1>
      <p className="text-lg mb-2">Location: Community Center, Downtown</p>
      <p className="text-lg mb-6">Time: 9:00 AM - 3:00 PM</p>

      {/* Max Volunteers Above Time Slots */}
      <p className="text-lg font-medium mb-6">
        <strong>Max Volunteers Allowed in Event:</strong> {maxVolunteers}
      </p>

      {/* Time Slot Management */}
      <h2 className="text-2xl font-semibold mb-4">Time Slots</h2>
      <ul className="mb-4">
        {timeSlots.map((slot, index) => (
          <li key={index} className="mb-4 p-4 border rounded bg-white">
            <p className="text-lg font-medium">
              {slot.slot} - Volunteers: {slot.volunteers}/{slot.limit}
            </p>
            {slot.volunteers >= slot.limit ? (
              <p className="text-red-600">This slot is full.</p>
            ) : (
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => {
                  const updatedSlots = [...timeSlots];
                  updatedSlots[index].volunteers += 1;
                  setTimeSlots(updatedSlots);
                }}
              >
                Lock Slot
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Total Volunteers */}
      <p className="text-lg font-medium mb-6">
        <strong>Total Volunteers:</strong> {totalVolunteers}
      </p>

      {/* Event Progress */}
      <h2 className="text-2xl font-semibold mb-4">Event Progress</h2>
      <p className="text-lg mb-6">Current Status: {eventProgress}</p>
      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setEventProgress('Completed')}
      >
        Update Progress
      </button>

      {/* Invitations */}
      <h2 className="text-2xl font-semibold mb-4">Manage Invitations</h2>
      <button
        className="mb-4 px-4 py-2 bg-purple-500 text-white rounded"
        onClick={sendInvitations}
      >
        Send Invitations
      </button>
      <button
        className="mb-6 px-4 py-2 bg-yellow-500 text-black rounded"
        onClick={sendReminders}
      >
        Send Reminders
      </button>

      {/* Volunteers List */}
      <h2 className="text-2xl font-semibold mb-4">Registered Volunteers</h2>
      <ul className="mb-6">
        {volunteers.map((volunteer, index) => (
          <li key={index} className="mb-2">
            {volunteer.name} - {volunteer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDescription;
