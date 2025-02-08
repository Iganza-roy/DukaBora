import { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, isSignedIn } = useUser();
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (user) {
      const userRole = user.publicMetadata?.role || 'user';
      setRole(userRole);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isSignedIn, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
