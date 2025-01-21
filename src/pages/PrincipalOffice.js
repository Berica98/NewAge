import React from "react";
import principalImage from "../assets/principal_smiling.png";
import "../styles/style.css";

const PrincipalOffice = () => {
  const message = "Here you&apos;ll find school updates.";  // Escaped apostrophe in "you'll"
  
  return (
    <div className="page">
      <img
        src={principalImage}
        alt="Principal&apos;s Office"  // Escaped apostrophe in "Principal's Office"
        className="page-image"
      />
      <h1>Welcome to the Principal&apos;s Office</h1>  {/* Escaped apostrophe in "Principal's" */}
      <p>{message}</p>
      <p>You&apos;ll see details about students&apos; progress.</p>  {/* Escaped apostrophes */}
    </div>
  );
};

export default PrincipalOffice;
