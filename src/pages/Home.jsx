import ProductGallery from '../Components/ProductGallery';
import { IoBagHandleOutline } from 'react-icons/io5';
import HeroSlider from '../utils/HeroSlider';
import { FiSearch } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col text-black justify-center items-center'>
      <div className='flex justify-between bg-gray1 w-280 h-70 pl-4 pt-6 rounded-3xl'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-[45px] font-[800] text-primary'>
            Celebrate Love with Exclusive <br />
            Valentine’s Discounts!
          </h1>
          <p>
            Find the perfect gift for your loved ones this <br />
            Valentine’s season!
          </p>
          <button className='flex justify-center items-center gap-2 bg-primary w-40 cursor-pointer py-2 px-4 rounded-2xl text-black font-bold hover:bg-red-400 hover:transform duration-300 hover:-translate-y-1'>
            <p>Shop Now</p>
            <IoBagHandleOutline className='text-4xl' />
          </button>
        </div>
        <HeroSlider />
      </div>
      <div className='flex justify-center items-center mt-5 gap-10'>
        <div className='bg-white flex rounded-4xl w-70 h-10 justify-between items-center p-3'>
          <form action=''>
            <input
              type='text'
              placeholder='Search Products'
              className='text-gray-700 border-none outline-none w-60'
            />
            <button type='submit'>
              <FiSearch className='text-black hover:text-red-400 hover:transform duration-300 cursor-pointer' />
            </button>
          </form>
        </div>
        <button className='flex justify-center items-center bg-white w-27 h-10 rounded-4xl'>
          <span>Category</span>
          <IoMdArrowDropdown />
        </button>
        <button className='flex justify-center items-center bg-white w-30 h-10 rounded-4xl'>
          <span>Popularity</span>
          <IoMdArrowDropdown />
        </button>
        <button className='flex justify-center items-center bg-white w-25 h-10 rounded-4xl'>
          <span>Price</span>
          <IoMdArrowDropdown />
        </button>
      </div>
      <div>
        <ProductGallery />
      </div>
      <button
        className='rounded-lg border border-black w-27 h-9 mt-2 text-sm hover:bg-primary hover:transform duration-300 active:bg-red-300'
        onClick={() => navigate('/products')}
      >
        Show More
      </button>
    </div>
  );
};

export default Home;
