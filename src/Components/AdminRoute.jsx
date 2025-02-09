import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../Context/AuthContext';

const AdminRoute = () => {
  const { isSignedIn, role } = useAuthContext();

  // Prevent premature redirects while data is still loading
  if (isSignedIn === undefined || role === null) {
    return <p>Loading route...</p>;
  }

  if (!isSignedIn) {
    return <Navigate to='/admin/login' replace />;
  }

  if (role !== 'admin') {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
