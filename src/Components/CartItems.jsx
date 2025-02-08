import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

const CartItems = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
  } = useContext(CartContext);

  return (
    <div className='text-black flex flex-col gap-x-4 py-2 border-b border-primary w-full font--light overflow-y-auto overflow-x-hidden'>
      <div className='max-h-[500px] overflow-y-auto pr-2'>
        {cartItems.map((item) => {
          return (
            <div key={item.id} className='flex bg-gray2 rounded-lg p-2 my-3 '>
              <div className='w-full min-h-[150px] flex items-center'>
                <Link to={`/product/${item.id}`}>
                  <img
                    className='max-w-[100px] h-[100px] object-cover mr-4 rounded-sm'
                    src={item.image}
                    alt={item.title}
                  />
                </Link>
                <div className='w-full flex-col'>
                  <div className='flex justify-between mb-2'>
                    <Link
                      to={`/product/${item.id}`}
                      className='text-sm font-bold ml-3 max-w-[240px] text-black hover-underline'
                    >
                      {item.title}
                    </Link>
                    <div
                      className='cursor-pointer w-7'
                      onClick={() => removeFromCart(item.id)}
                    >
                      <IoMdClose className='text-black text-2xl hover:text-primary transition' />
                    </div>
                  </div>
                  <div className='flex gap-x-2 h-[36px] pl-4'>
                    <div className='flex flex-1 max-w-[100px] items-center text-gray-500 h-full border rounded-lg font-medium'>
                      <div className='flex-1 h-full text-sm flex justify-center items-center cursor-pointer'>
                        <IoMdRemove
                          className='hover:text-primary'
                          onClick={() => decreaseAmount(item.id)}
                        />
                      </div>
                      <div className='h-full flex text-sm justify-center items-center px-2'>
                        {item.amount}
                      </div>
                      <div
                        onClick={() => increaseAmount(item.id)}
                        className='flex-1 h-full text-sm flex justify-center items-center cursor-pointer'
                      >
                        <IoMdAdd className='hover:text-primary' />
                      </div>
                    </div>
                    <div className='flex-1 flex justify-around items-center text-gray-500'>
                      ${item.price}
                    </div>
                    <div className='flex-1 flex justify-end items-center font-medium text-gray-500'>
                      ${parseFloat(item.price * item.amount).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div>
          <div className='border-t border-primary flex justify-between items-center'>
            <div className='flex w-full items-center uppercase font-bold'>
              <span className='mr-2 '>Total: </span> $1000
            </div>
            <div
              className='cursor-pointer py-4 mt-1 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 w-15 h-full flex justify-center items-center text-xl'
              onClick={clearCart}
            >
              <FiTrash2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
