import React from "react";
import principalImage from "../assets/principal_smiling.png";
import "../styles/style.css";

const PrincipalOffice = () => {
  return (
    <div className="page">
      <img
        src={principalImage}
        alt="Principal's Office"
        className="page-image"
      />
      <h1>Principal's Office</h1>
      <p>
        New Age's Principal ensures that students' academic performance and
        well-being are top priorities, overseeing the curriculum and managing
        school-wide initiatives for continuous improvement.
      </p>
    </div>
  );
};

export default PrincipalOffice;
