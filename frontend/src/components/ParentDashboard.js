import React, { useState } from 'react';

// Sample Data for Parent View (Child's performance, grades, assignments)
const parentData = {
  grades: {
    juniorSecondary: [
      { name: "Mathematics", grade: "B+" },
      { name: "English", grade: "A" },
      { name: "Integrated Science", grade: "B" },
      { name: "Social Studies", grade: "C+" },
      { name: "Computer Science", grade: "B" }
    ],
    seniorSecondary: {
      scienceSubjects: [
        { name: "Physics", grade: "B" },
        { name: "Chemistry", grade: "A-" },
        { name: "Biology", grade: "A" }
      ],
      artSubjects: [
        { name: "Fine Art", grade: "B+" },
        { name: "Music", grade: "B" }
      ],
      commercialSubjects: [
        { name: "Accounting", grade: "A" },
        { name: "Economics", grade: "B-" }
      ]
    }
  },
  upcomingAssignments: [
    { subject: "Mathematics", assignment: "Complete geometry problems", deadline: "2025-01-15" },
    { subject: "Integrated Science", assignment: "Experiment: Chemical Reactions", deadline: "2025-01-17" },
    { subject: "Chemistry", assignment: "Research on acids and bases", deadline: "2025-01-20" }
  ],
  attendance: {
    presentDays: 18,
    totalDays: 20
  },
  importantNotes: [
    { message: "Parent-Teacher meeting on 2025-01-17", isRead: false },
    { message: "Field Trip to Science Museum on 2025-02-05", isRead: true }
  ]
};

const ParentDashboard = () => {

  const [isJunior, setIsJunior] = useState(true); // Switch between Junior Secondary and Senior Secondary

  const handleSwitchGradeLevel = () => {
    setIsJunior(!isJunior);
  };

  return (
    <div className="container">
      <h1>Welcome to Your Parent Dashboard</h1>

      <button onClick={handleSwitchGradeLevel}>
        Switch to {isJunior ? "Senior Secondary" : "Junior Secondary"} View
      </button>

      <div className="grades-section">
        <h2>{isJunior ? "Junior Secondary" : "Senior Secondary"} Grades</h2>

        {/* Junior Secondary Grades */}
        {isJunior && (
          <div className="grade-list">
            {parentData.grades.juniorSecondary.map((subject, index) => (
              <div key={index} className="subject">
                <h4>{subject.name}</h4>
                <p>Grade: {subject.grade}</p>
              </div>
            ))}
          </div>
        )}

        {/* Senior Secondary Grades */}
        {!isJunior && (
          <div className="grade-list">
            <h3>Science Subjects</h3>
            {parentData.grades.seniorSecondary.scienceSubjects.map((subject, index) => (
              <div key={index} className="subject">
                <h4>{subject.name}</h4>
                <p>Grade: {subject.grade}</p>
              </div>
            ))}

            <h3>Art Subjects</h3>
            {parentData.grades.seniorSecondary.artSubjects.map((subject, index) => (
              <div key={index} className="subject">
                <h4>{subject.name}</h4>
                <p>Grade: {subject.grade}</p>
              </div>
            ))}

            <h3>Commercial Subjects</h3>
            {parentData.grades.seniorSecondary.commercialSubjects.map((subject, index) => (
              <div key={index} className="subject">
                <h4>{subject.name}</h4>
                <p>Grade: {subject.grade}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="assignments-section">
        <h2>Upcoming Assignments and Exams</h2>
        {parentData.upcomingAssignments.map((assignment, index) => (
          <div key={index} className="assignment">
            <h4>{assignment.subject}</h4>
            <p>Assignment: {assignment.assignment}</p>
            <p>Deadline: {assignment.deadline}</p>
          </div>
        ))}
      </div>

      <div className="attendance-section">
        <h2>Student Attendance</h2>
        <p>Days Present: {parentData.attendance.presentDays}</p>
        <p>Total School Days: {parentData.attendance.totalDays}</p>
      </div>

      <div className="important-notes-section">
        <h2>Important Notes</h2>
        {parentData.importantNotes.map((note, index) => (
          <div key={index} className={note.isRead ? "read-note" : "unread-note"}>
            <p>{note.message}</p>
            {note.isRead ? <span className="read-status">Read</span> : <span className="unread-status">Unread</span>}
          </div>
        ))}
      </div>

      <style>{`
        .container {
          margin: 20px;
          font-family: Arial, sans-serif;
        }
        .grade-list, .assignment, .attendance-section, .important-notes-section {
          margin-top: 20px;
        }
        .subject, .assignment, .attendance-section, .important-notes-section {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        h1, h2 {
          font-size: 1.5rem;
        }
        h3 {
          font-size: 1.3rem;
        }
        h4 {
          font-size: 1.1rem;
        }
        button {
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-bottom: 20px;
        }
        button:hover {
          background-color: #0056b3;
        }
        .read-status, .unread-status {
          font-size: 0.9rem;
        }
        .read-note {
          background-color: #e0f7fa;
        }
        .unread-note {
          background-color: #ffebee;
        }
      `}</style>
    </div>
  );
};

export default ParentDashboard;
