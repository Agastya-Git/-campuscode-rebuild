import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import { INITIAL_USER, INITIAL_HACKATHONS, INITIAL_NOTIFICATIONS, INITIAL_CERTIFICATES } from './mockData';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' | 'login' | 'register' | 'student'
  const [user, setUser] = useState(INITIAL_USER);
  const [hackathons, setHackathons] = useState(INITIAL_HACKATHONS);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [certificates, setCertificates] = useState(INITIAL_CERTIFICATES);

  const handleLoginSuccess = (userData) => {
    setUser({ ...INITIAL_USER, ...userData });
  };

  const handleRegisterSuccess = (userData) => {
    setUser({ ...INITIAL_USER, ...userData });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  return (
    <div className="campuscode-app-root">
      {/* Floating Demo Navigation Helper Bar for easy hackathon judging */}
      <div className="demo-switcher-bar">
        <div className="switcher-info">
          <span className="rec-badge">REBUILD '26</span>
          <span className="switcher-title">CampusCode 4-Page User Flow:</span>
        </div>
        <div className="switcher-btns">
          <button 
            className={currentPage === 'landing' ? 'active' : ''} 
            onClick={() => setCurrentPage('landing')}
          >
            1. Public Dashboard
          </button>
          <button 
            className={currentPage === 'login' ? 'active' : ''} 
            onClick={() => setCurrentPage('login')}
          >
            2. Login
          </button>
          <button 
            className={currentPage === 'register' ? 'active' : ''} 
            onClick={() => setCurrentPage('register')}
          >
            3. Register
          </button>
          <button 
            className={currentPage === 'student' ? 'active' : ''} 
            onClick={() => setCurrentPage('student')}
          >
            4. Student Dashboard
          </button>
        </div>
      </div>

      {/* Dynamic View Router */}
      {currentPage === 'landing' && (
        <LandingPage 
          navigate={setCurrentPage} 
          hackathons={hackathons} 
          user={user} 
        />
      )}

      {currentPage === 'login' && (
        <LoginPage 
          navigate={setCurrentPage} 
          onLoginSuccess={handleLoginSuccess} 
        />
      )}

      {currentPage === 'register' && (
        <RegisterPage 
          navigate={setCurrentPage} 
          onRegisterSuccess={handleRegisterSuccess} 
        />
      )}

      {currentPage === 'student' && (
        <StudentDashboard 
          user={user} 
          hackathons={hackathons} 
          notifications={notifications} 
          certificates={certificates} 
          onLogout={handleLogout} 
          navigate={setCurrentPage} 
        />
      )}
    </div>
  );
}
