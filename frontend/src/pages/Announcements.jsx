import React, { useState, useEffect } from 'react';
import { fetchAnnouncements } from '../utils/api';
import AnnouncementCard from '../components/AnnouncementCard';

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const data = await fetchAnnouncements();
        setAnnouncements(data);
      } catch (err) {
        setError('Failed to load announcements.');
      }
    };
    loadAnnouncements();
  }, []);

  return (
    <div>
      <h1>Announcements</h1>
      {error && <p className="error">{error}</p>}
      {announcements.map((announcement) => (
        <AnnouncementCard
          key={announcement.id}
          title={announcement.title}
          message={announcement.message}
        />
      ))}
    </div>
  );
}

export default Announcements;
