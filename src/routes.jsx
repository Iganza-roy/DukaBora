import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Support from './pages/Support';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/AdminRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Support />} />
      </Route>

      {/* Authentication */}
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* Protected*/}
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route element={<AdminRoute />}>
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
