import React from "react";
import headerImage from "../assets/header_image.png";
import "../styles/style.css";

const Home = () => {
  return (
    <div className="home">
      <img src={headerImage} alt="NewAge Header" className="header-image" />
      <h1>Welcome to New Age School</h1>
      <p>
        Empowering students with tools for academic excellence, mental
        well-being, and extracurricular growth. Explore our features to see
        what we have to offer!
      </p>
    </div>
  );
};

export default Home;
