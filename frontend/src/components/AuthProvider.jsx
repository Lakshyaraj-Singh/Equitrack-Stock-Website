import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // If no token and trying to access dashboard, redirect to login
    if (!token && location.pathname === '/dashboard') {
      navigate('/login');
    }
    
    // If token exists and on login page, redirect to dashboard
    if (token && location.pathname === '/login') {
      navigate('/dashboard');
    }
  }, [location.pathname, navigate]);

  return children;
};
