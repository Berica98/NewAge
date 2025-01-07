import React from 'react';
import { Link } from 'react-router-dom';
import schoolImage from '../assets/school.jpg'; // Ensure the image is available in the assets folder
import './Home.css'; // Create a separate CSS file for styling

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <img src={schoolImage} alt="School" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to NewAge</h1>
          <p>Your gateway to managing student life effectively.</p>
          <div className="hero-buttons">
            <Link to="/announcements" className="btn">Announcements</Link>
            <Link to="/students" className="btn">Students</Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>View announcements and school updates.</li>
          <li>Track student grades and performance.</li>
          <li>Access curriculum and counseling services.</li>
          <li>Communicate with parents, teachers, and principals.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} NewAge App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
