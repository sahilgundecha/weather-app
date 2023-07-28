import React, { useState, useEffect } from "react";
import "./userstats.css";

const UserStats = () => {
  // Initialize state to store user data
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    lastName: "",
    lastLogin: "",
    count: 1,
  });

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  return (
    <div className="user-stats-container">
      <h2>User Stats</h2>
      {userData?.firstName && (
        <p>
          Full Name: {userData.firstName} {userData.lastName}
        </p>
      )}
      {userData?.email && (
        <p>
          Email: {userData?.email} {userData.lastName}
        </p>
      )}
      <p>Last Login: {userData.lastLogin}</p>
      <p>Login Counts: {userData.count || 2}</p>
    </div>
  );
};

export default UserStats;
