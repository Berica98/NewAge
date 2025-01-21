import React from "react";
import groupDiscussionImage from "../assets/group_discussion.png";
import "../styles/style.css";

const GroupDiscussion = () => {
  return (
    <div className="page">
      <img
        src={groupDiscussionImage}
        alt="Group Discussion"
        className="page-image"
      />
      <h1>Group Discussion</h1>
      <p>
        New Age promotes collaboration among students through interactive group
        discussions that foster teamwork, communication, and shared learning
        experiences.
      </p>
    </div>
  );
};

export default GroupDiscussion;
