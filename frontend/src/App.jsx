import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcements from './pages/Announcements';
import Students from './pages/Students';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </Router>
  );
}

export default App;
