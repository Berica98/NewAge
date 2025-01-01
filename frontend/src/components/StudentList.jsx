import React from 'react';

function StudentList({ students }) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - {student.className}
        </li>
      ))}
    </ul>
  );
}

export default StudentList;

