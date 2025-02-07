import { UserButton, useUser } from '@clerk/clerk-react';
import logo from '../assets/DukaBora.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';

const Header = () => {
  const navigate = useNavigate;
  const { user } = useUser();

  return (
    <div className='flex justify-between items-center py-4 px-8'>
      <img
        onClick={() => navigate('/')}
        className='w-20 md:w-40 cursor-pointer hover:-translate-y-0.5 transition-transform duration-300'
        src={logo}
        alt='Duka Bora'
      />
      <ul className='-mr-18'>
        <NavLink to='/'>
          <li className='text-black relative inline-block'>
            <div className='hr absolute inset-0 bg-white rounded-3xl z-0 hidden transition-all duration-300'></div>
            <div className='relative z-10 px-4 py-2'>Home</div>
          </li>
        </NavLink>
        <NavLink to='/products'>
          <li className='text-black relative inline-block'>
            <div className='hr absolute inset-0 bg-white rounded-3xl z-0 hidden transition-all duration-300'></div>
            <div className='relative z-10 px-4 py-2'>Products</div>
          </li>
        </NavLink>
        <NavLink to='/about'>
          <li className='text-black relative inline-block'>
            <div className='hr absolute inset-0 bg-white rounded-3xl z-0 hidden transition-all duration-300'></div>
            <div className='relative z-10 px-4 py-2'>About</div>
          </li>
        </NavLink>
        <NavLink to='/support'>
          <li className='text-black relative inline-block'>
            <div className='hr absolute inset-0 bg-white rounded-3xl z-0 hidden transition-all duration-300'></div>
            <div className='relative z-10 px-4 py-2'>Support</div>
          </li>
        </NavLink>
      </ul>
      <div className='flex gap-3 border-2 items-center'>
        <div className='bg-white flex rounded-4xl w-70 h-10 justify-between items-center p-3'>
          <p className='text-black'>Search Products</p>
          <FiSearch className='text-black' />
        </div>
        <div className='flex flex-col items-center space-y-1'>
          <UserButton userProfileMode='modal' />
          {user && (
            <span className='text-sm font-medium text-black'>
              {user.fullName || user.username}
            </span>
          )}
        </div>
        <div className=''>
          <IoCartOutline className='text-black text-3xl hover:-translate-y-0.5 transition-transform duration-300' />
          <span className='text-black text-sm'>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
