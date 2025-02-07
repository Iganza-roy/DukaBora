import { BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import AppRoutes from './routes';

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkKey} fallbackRedirectUrl='/'>
      <Router>
        <AppRoutes />
      </Router>
    </ClerkProvider>
  );
};

export default App;
