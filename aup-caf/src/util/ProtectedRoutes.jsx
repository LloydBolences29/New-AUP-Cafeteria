// components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../util/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { auth } = useAuth();
  console.log("ProtectedRoute auth state:", auth);

  if (auth.loading) return <p>Loading...</p>;

  if (!auth.isAuthenticated) {
    console.log("User not authenticated, redirecting to login");
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(auth.user)) {
    console.log("Unauthorized access attempt by role:", auth.user);
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
