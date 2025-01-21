import React from "react";
import exerciseGatheringImage from "../assets/exercise_gathering.png";
import "../styles/style.css";

const ExerciseGathering = () => {
  return (
    <div className="page">
      <img
        src={exerciseGatheringImage}
        alt="Exercise Gathering"
        className="page-image"
      />
      <h1>Exercise Gathering</h1>
      <p>
        New Age encourages physical well-being through structured exercise
        gatherings, promoting healthy lifestyles and building team spirit
        among students.
      </p>
    </div>
  );
};

export default ExerciseGathering;
