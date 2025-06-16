// src/components/common/ProtectedRoute.jsx
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/verify', {
          withCredentials: true,
        });

        setUserData(response.data.user); // <-- this contains decoded user info (like id)
        setIsAuth(true);
      } catch (err) {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) return <div>Loading...</div>;

  return isAuth
    ? typeof children === 'function'
      ? children(userData)  // if `children` is a function, pass user
      : children             // fallback (non-functional children)
    : <Navigate to="/login" />;
};

export default ProtectedRoute;

