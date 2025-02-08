import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItems from './CartItems';
import { SideBarContext } from '../Context/SideBarContext';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const cart = useContext(CartContext);

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white w-[75vw] sm:w-[50vw] md:w-[35vw] xl:max-w-[30vw] transition-transform duration-300 z-20 px-4 lg:px-[35px] 
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Close Button */}
      <div className='flex justify-between items-center py-4 border-b'>
        <h2 className='text-black text-lg font-bold'>Shopping Cart (0)</h2>
        <button
          onClick={handleClose}
          className='text-gray-600 hover:text-black'
        >
          <IoMdArrowForward className='text-2xl' />
        </button>
      </div>

      {/* Cart Items */}
      <CartItems />

      {/* Checkout Button */}
      <div className='p-4'>
        <button className='w-full bg-primary text-white py-2 rounded-lg hover:bg-red-400'>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
