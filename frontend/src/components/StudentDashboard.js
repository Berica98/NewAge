import React, { useState } from 'react';
import './style.css'; // Importing the external stylesheet

// Sample Data for Grades and Assignments
const studentData = {
  juniorSecondary: {
    subjects: [
      { name: "Mathematics", grade: "B+", assignment: "Solve algebra equations" },
      { name: "English", grade: "A", assignment: "Write a composition on 'My Country'" },
      { name: "Integrated Science", grade: "B", assignment: "Experiment: Chemical Reactions" },
      { name: "Social Studies", grade: "C+", assignment: "Write a report on Nigerian history" },
      { name: "Computer Science", grade: "B", assignment: "Complete programming challenge on variables" },
    ],
  },
  seniorSecondary: {
    scienceSubjects: [
      { name: "Physics", grade: "B", assignment: "Laboratory report on laws of motion" },
      { name: "Chemistry", grade: "A-", assignment: "Experiment: Acid-Base Reactions" },
      { name: "Biology", grade: "A", assignment: "Research on Genetics" },
    ],
    artSubjects: [
      { name: "Fine Art", grade: "B+", assignment: "Draw a human portrait" },
      { name: "Music", grade: "B", assignment: "Compose a simple song" },
    ],
    commercialSubjects: [
      { name: "Accounting", grade: "A", assignment: "Prepare balance sheet" },
      { name: "Economics", grade: "B-", assignment: "Write an essay on demand and supply" },
    ],
  },
};

const StudentDashboard = () => {
  const [isJunior, setIsJunior] = useState(true); // Switch between Junior Secondary and Senior Secondary

  const handleSwitchGradeLevel = () => {
    setIsJunior(!isJunior);
  };

  return (
    <div className="container">
      <h1>Welcome to your Dashboard, Student!</h1>
      <button onClick={handleSwitchGradeLevel}>
        Switch to {isJunior ? "Senior Secondary" : "Junior Secondary"}
      </button>

      <h2>{isJunior ? "Junior Secondary" : "Senior Secondary"} Grades</h2>

      {/* Junior Secondary Section */}
      {isJunior && (
        <div className="grade-section">
          <h3>Junior Secondary Grades</h3>
          {studentData.juniorSecondary.subjects.map((subject, index) => (
            <div key={index} className="subject">
              <h4>{subject.name}</h4>
              <p>Grade: {subject.grade}</p>
              <p>Assignment: {subject.assignment}</p>
            </div>
          ))}
        </div>
      )}

      {/* Senior Secondary Section */}
      {!isJunior && (
        <div className="grade-section">
          <h3>Senior Secondary Grades</h3>

          <h4>Science Subjects</h4>
          {studentData.seniorSecondary.scienceSubjects.map((subject, index) => (
            <div key={index} className="subject">
              <h4>{subject.name}</h4>
              <p>Grade: {subject.grade}</p>
              <p>Assignment: {subject.assignment}</p>
            </div>
          ))}

          <h4>Art Subjects</h4>
          {studentData.seniorSecondary.artSubjects.map((subject, index) => (
            <div key={index} className="subject">
              <h4>{subject.name}</h4>
              <p>Grade: {subject.grade}</p>
              <p>Assignment: {subject.assignment}</p>
            </div>
          ))}

          <h4>Commercial Subjects</h4>
          {studentData.seniorSecondary.commercialSubjects.map((subject, index) => (
            <div key={index} className="subject">
              <h4>{subject.name}</h4>
              <p>Grade: {subject.grade}</p>
              <p>Assignment: {subject.assignment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
