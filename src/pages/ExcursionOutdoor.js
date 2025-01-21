import React from "react";
import excursionImage from "../assets/excursion_outdoor.png";
import "../styles/style.css";

const ExcursionOutdoor = () => {
  return (
    <div className="page">
      <img
        src={excursionImage}
        alt="Outdoor Excursion"
        className="page-image"
      />
      <h1>Outdoor Excursions</h1>
      <p>
        New Age organizes exciting outdoor excursions, providing students with
        opportunities to explore cultural landmarks, historical sites, and
        natural wonders, enhancing their learning beyond the classroom.
      </p>
    </div>
  );
};

export default ExcursionOutdoor;
