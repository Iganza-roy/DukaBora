import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='page-container'>
      <Header />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
