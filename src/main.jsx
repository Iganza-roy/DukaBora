import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './Context/AuthContext';
import { CartProvider } from './Context/CartContext';
import { ProductProvider } from './Context/ProductContext';
import './Global.css';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkKey} fallbackRedirectUrl='/'>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </ClerkProvider>
  </StrictMode>
);
