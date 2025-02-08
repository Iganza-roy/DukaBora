import { useContext, useState } from 'react';
import { SideBarContext } from '../Context/SideBarContext';
import { CartContext } from '../Context/CartContext';
import { UserButton, useUser, SignInButton } from '@clerk/clerk-react';
import logo from '../assets/DukaBora.webp';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';
import { HiMenu, HiX } from 'react-icons/hi';
import SideBar from './SideBar';

const Header = () => {
  const { handleOpen } = useContext(SideBarContext);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const { itemAmount } = useContext(CartContext);

  return (
    <header>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-12'>
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          className='w-20 md:w-40 cursor-pointer hover:-translate-y-0.5 transition-transform duration-300'
          src={logo}
          alt='Duka Bora'
        />

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-8'>
          {['/', '/products', '/about', '/support'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className='text-black relative inline-block px-4 py-2 hover:text-red-400'
            >
              {path === '/'
                ? 'Home'
                : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
              <hr className='border-none outline-none h-0.5 bg-primary w-5/5 m-auto hidden' />
            </NavLink>
          ))}
        </nav>

        {/* Desktop Search, User & Cart */}
        <div className='hidden md:flex items-center space-x-4'>
          {/* Search Bar */}
          <div className='relative w-64'>
            <input
              type='text'
              placeholder='Search Products'
              className='w-full border rounded-full px-4 py-2 text-gray-700 outline-none'
            />
            <button className='absolute right-3 top-1/2 transform -translate-y-1/2'>
              <FiSearch className='text-gray-600 hover:text-red-400' />
            </button>
          </div>

          {/* User Button OR Login */}
          <div className='flex flex-col items-center'>
            {isSignedIn ? (
              <UserButton
                userProfileMode='modal'
                className='hover:-translate-y-0.5 transition-transform duration-300'
              />
            ) : (
              <SignInButton mode='modal'>
                <button className='px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-600 transition'>
                  Login
                </button>
              </SignInButton>
            )}
          </div>

          {/* Cart Icon */}
          <div
            className='cursor-pointer flex flex-col items-center relative'
            onClick={handleOpen}
          >
            <IoCartOutline className='text-black text-3xl hover:-translate-y-0.5 transition-transform duration-300' />
            <div className='bg-primary absolute -top-2 -right-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center font-bold'>
              {itemAmount}
            </div>
            <span className='text-black text-sm'>Cart</span>
          </div>
        </div>

        {/* Mobile Cart + Menu */}
        <div className='md:hidden flex items-center space-x-4'>
          {/* Cart Icon - Placed before the menu */}
          <div
            className='cursor-pointer flex items-center'
            onClick={handleOpen}
          >
            <IoCartOutline className='text-black text-3xl hover:-translate-y-0.5 transition-transform duration-300' />
          </div>

          {/* Mobile Menu Button */}
          <button
            className='text-3xl text-gray-800'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className='md:hidden bg-gray-100 py-4'>
          <ul className='flex flex-col items-center space-y-4'>
            {['/', '/products', '/about', '/support'].map((path, index) => (
              <NavLink
                key={index}
                to={path}
                className='text-black text-lg hover:text-red-400'
                onClick={() => setIsOpen(false)}
              >
                {path === '/'
                  ? 'Home'
                  : path.replace('/', '').charAt(0).toUpperCase() +
                    path.slice(2)}
              </NavLink>
            ))}

            {/* Search Bar for Mobile */}
            <div className='relative w-64'>
              <input
                type='text'
                placeholder='Search Products'
                className='w-full border rounded-full px-4 py-2 text-gray-700 outline-none'
              />
              <button className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                <FiSearch className='text-gray-600 hover:text-red-400' />
              </button>
            </div>

            {/* User Button OR Login for Mobile */}
            <div>
              {isSignedIn ? (
                <UserButton userProfileMode='modal' />
              ) : (
                <SignInButton mode='modal'>
                  <button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'>
                    Login
                  </button>
                </SignInButton>
              )}
            </div>
          </ul>
        </nav>
      )}
      <SideBar />
    </header>
  );
};

export default Header;
