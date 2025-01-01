import React from 'react';

function AnnouncementCard({ title, message }) {
  return (
    <div className="announcement-card">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default AnnouncementCard;
