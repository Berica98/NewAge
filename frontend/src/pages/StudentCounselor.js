import React from "react";
import counselorImage from "../assets/student_counselor.png";
import "../styles/style.css";

const StudentCounselor = () => {
  return (
    <div className="page">
      <img
        src={counselorImage}
        alt="Student and Counselor"
        className="page-image"
      />
      <h1>Student Counselor</h1>
      <p>
        New Age offers personalized guidance through our dedicated counselors,
        providing students with mental health support, career advice, and
        academic planning to help them thrive in every aspect of their lives.
      </p>
    </div>
  );
};

export default StudentCounselor;
