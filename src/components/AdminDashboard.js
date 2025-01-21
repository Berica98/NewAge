import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Welcome, Admin!</h2>
      <div className="dashboard-links">
        <Link to="/register">Register New Student</Link>
        <Link to="/students">View All Students</Link>
        <Link to="/reports">Generate Reports</Link>
        <Link to="/settings">Admin Settings</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;

