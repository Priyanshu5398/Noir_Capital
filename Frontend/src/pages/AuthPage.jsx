import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../App';
import AuthForm from '../components/AuthForm';
import LOGO from '../utils/noir.jpg';
import { FiArrowLeft } from 'react-icons/fi';
import '../Styles/AuthPage.css';

const AuthPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();

  const userType = searchParams.get('type') || 'user';

  const handleAuthSuccess = async (token) => {
    const userData = await login(token);
    if (userData) {
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="auth-container">
      <button onClick={() => navigate('/login')} className="back-button">
        <FiArrowLeft className="text-lg" />
        <span>Back</span>
      </button>
      <div className="auth-header">
        <img
          src={LOGO}
          alt="Noir Capital Logo"
          className="auth-logo"
        />
        <h2
          className={
            userType === 'admin'
              ? 'admin-heading'
              : (userType === 'user-plain' ? 'user-login-heading' : 'user-heading')
          }
        >
          {userType === 'admin'
            ? 'Admin Secure Login'
            : (userType === 'user-plain' ? 'User Login' : 'User Portal Login')}
        </h2>
      </div>
      <div className="auth-card">
        <AuthForm onAuthSuccess={handleAuthSuccess} userType={userType} />
      </div>
    </div>
  );
};

export default AuthPage;
