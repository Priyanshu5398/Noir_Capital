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
      if (userData.role === 'admin') {
        navigate('/hr-dashboard', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
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
          className="h-16 w-auto mx-auto mb-4"
        />
      </div>
      <div className="auth-card">
        <AuthForm onAuthSuccess={handleAuthSuccess} userType={userType} />
      </div>
    </div>
  );
};

export default AuthPage;
