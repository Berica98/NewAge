import React, { useState, useEffect } from 'react';
import { fetchStudents } from '../utils/api';
import StudentList from '../components/StudentList';

function Students() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (err) {
        setError('Failed to load students.');
      }
    };
    loadStudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      {error && <p className="error">{error}</p>}
      <StudentList students={students} />
    </div>
  );
}

export default Students;
