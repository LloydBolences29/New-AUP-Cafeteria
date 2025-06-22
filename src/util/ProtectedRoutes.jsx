// components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../util/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { auth } = useAuth();

  if (auth.loading) return <p>Loading...</p>;

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(auth.user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
