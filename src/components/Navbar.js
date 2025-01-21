import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import logo from "../assets/logo_image.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="New Age School Logo" className="logo" />
      <ul className="nav-links">
        {/* Main Navigation Links */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/group-discussion">Group Discussion</Link>
        </li>
        <li>
          <Link to="/exercise-gathering">Exercise Gathering</Link>
        </li>
        <li>
          <Link to="/principal-office">Principal Office</Link>
        </li>
        <li>
          <Link to="/award">Award</Link>
        </li>
        <li>
          <Link to="/excursion">Excursion</Link>
        </li>
        <li>
          <Link to="/student-counselor">Student Counselor</Link>
        </li>

        {/* Dashboard Links */}
        <li>
          <Link to="/student">Student Dashboard</Link>
        </li>
        <li>
          <Link to="/parent">Parent Dashboard</Link>
        </li>
        <li>
          <Link to="/teacher">Teacher Dashboard</Link>
        </li>
        <li>
          <Link to="/counselor">Counselor Dashboard</Link>
        </li>
        <li>
          <Link to="/principal">Principal Dashboard</Link>
        </li>

        {/* Admin Links */}
        <li>
          <Link to="/admin/login">Admin Login</Link> {/* Updated */}
        </li>
        <li>
          <Link to="/admin/register">Admin Register</Link> {/* Updated */}
        </li>

        {/* Student Links */}
        <li>
          <Link to="/admin/students">Student List</Link> {/* Updated */}
        </li>
        <li>
          <Link to="/student/login">Student Login</Link> {/* Updated */}
        </li>
        <li>
          <Link to="/student/register">Student Register</Link> {/* Updated */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
