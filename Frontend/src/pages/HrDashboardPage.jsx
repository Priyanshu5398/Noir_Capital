import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App'; // Import the useAuth hook
import "../Styles/HrDashboardPage.css";

const HrDashboardPage = () => {
  // Get the logout function from our authentication context
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="hr-dashboard-container">
      <h1 className="hr-dashboard-title">
        🔐 HR Dashboard (Admin Portal)
      </h1>
      <button
        onClick={handleLogout} // Use the new handler
        className="signout-button"
      >
        Sign Out
      </button>
    </div>
  );
};

export default HrDashboardPage;
