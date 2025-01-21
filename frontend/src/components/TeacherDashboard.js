import React, { useState } from 'react';

// Sample Data for Teacher View (Student grades, assignments, attendance)
const teacherData = {
  grades: {
    juniorSecondary: [
      { name: "Mathematics", classAverage: "B+" },
      { name: "English", classAverage: "A" },
      { name: "Integrated Science", classAverage: "B" },
      { name: "Social Studies", classAverage: "C+" },
      { name: "Computer Science", classAverage: "B" },
    ],
    seniorSecondary: {
      scienceSubjects: [
        { name: "Physics", classAverage: "B" },
        { name: "Chemistry", classAverage: "A-" },
        { name: "Biology", classAverage: "A" },
      ],
      artSubjects: [
        { name: "Fine Art", classAverage: "B+" },
        { name: "Music", classAverage: "B" },
      ],
      commercialSubjects: [
        { name: "Accounting", classAverage: "A" },
        { name: "Economics", classAverage: "B-" },
      ],
    },
  },
  assignments: [
    { subject: "Mathematics", assignment: "Complete geometry problems", deadline: "2025-01-15", status: "Assigned" },
    { subject: "Integrated Science", assignment: "Experiment: Chemical Reactions", deadline: "2025-01-17", status: "Assigned" },
    { subject: "Chemistry", assignment: "Research on acids and bases", deadline: "2025-01-20", status: "Assigned" },
  ],
  attendance: {
    totalStudents: 30,
    absentStudents: 5,
    presentStudents: 25,
  },
  importantNotes: [
    { message: "Final Exam preparation starts on 2025-03-17", isRead: false },
    { message: "Next Class Meeting rescheduled to 2025-04-14", isRead: true },
  ],
};

const TeacherDashboard = () => {
  const [isJunior, setIsJunior] = useState(true); // Switch between Junior Secondary and Senior Secondary
  const handleSwitchGradeLevel = () => {
    setIsJunior(!isJunior);
  };

  return (
    <div className="container">
      <h1>Welcome to Your Teacher Dashboard</h1>

      <button onClick={handleSwitchGradeLevel}>
        Switch to {isJunior ? "Senior Secondary" : "Junior Secondary"} View
      </button>

      <div className="grades-section">
        <h2>{isJunior ? "Junior Secondary" : "Senior Secondary"} Class Average Grades</h2>

        {isJunior && (
          <div className="grade-list">
            {teacherData.grades.juniorSecondary.map((subject, index) => (
              <div key={index} className="subject">
                <h4>{subject.name}</h4>
                <p>Class Average: {subject.classAverage}</p>
              </div>
            ))}
          </div>
        )}

        {!isJunior && (
          <div className="grade-list">
            <h3>Science Subjects</h3>
            {teacherData.grades.seniorSecondary.scienceSubjects.map((subject, index) => (
              <div key={index} className="subject">
                <h4>{subject.name}</h4>
                <p>Class Average: {subject.classAverage}</p>
              </div>
            ))}

            <h3>Art Subjects</h3>
            {teacherData.grades.seniorSecondary.artSubjects.map((subject, index) => (
              <div key={index} className="subject">
                <h4>{subject.name}</h4>
                <p>Class Average: {subject.classAverage}</p>
              </div>
            ))}

            <h3>Commercial Subjects</h3>
            {teacherData.grades.seniorSecondary.commercialSubjects.map((subject, index) => (
              <div key={index} className="subject">
                <h4>{subject.name}</h4>
                <p>Class Average: {subject.classAverage}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="assignments-section">
        <h2>Assignments Assigned to Students</h2>
        {teacherData.assignments.map((assignment, index) => (
          <div key={index} className="assignment">
            <h4>{assignment.subject}</h4>
            <p>Assignment: {assignment.assignment}</p>
            <p>Deadline: {assignment.deadline}</p>
            <p>Status: {assignment.status}</p>
          </div>
        ))}
      </div>

      <div className="attendance-section">
        <h2>Class Attendance Overview</h2>
        <p>Total Students: {teacherData.attendance.totalStudents}</p>
        <p>Present Students: {teacherData.attendance.presentStudents}</p>
        <p>Absent Students: {teacherData.attendance.absentStudents}</p>
      </div>

      <div className="important-notes-section">
        <h2>Class Important Notes</h2>
        {teacherData.importantNotes.map((note, index) => (
          <div key={index} className={note.isRead ? "read-note" : "unread-note"}>
            <p>{note.message}</p>
            {note.isRead ? <span className="read-status">Read</span> : <span className="unread-status">Unread</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
