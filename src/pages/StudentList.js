import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../api/studentApi'; // Ensure this matches your export

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetchStudents(); // Call the correct function
        setStudents(response);
      } catch (err) {
        console.error('Error fetching students:', err);
        setError('Error fetching students');
      }
    };
    getStudents();
  }, []); // Empty dependency array to fetch once on mount

  return (
    <div>
      <h2>Student List</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student._id}>{student.email}</li> // Adjust key and email as needed
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
