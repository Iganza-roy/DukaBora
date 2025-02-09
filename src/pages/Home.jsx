import ProductGallery from '../Components/ProductGallery';
import { IoBagHandleOutline } from 'react-icons/io5';
import { toast } from 'sonner';
import { useUser } from '@clerk/clerk-react';
import HeroSlider from '../utils/HeroSlider';
import Reviews from '../Components/Reviews';
import { FiSearch } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../Context/ProductContext';

const Home = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { setSearchQuery } = useProducts();

  const handleshopButton = () => {
    if (isSignedIn) {
      navigate('/products');
    } else {
      toast.error('Please sign in to continue shopping');
      navigate('/login');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    setSearchQuery(query);
    navigate('/products');
  };

  return (
    <div className='flex flex-col text-black items-center justify-center w-full'>
      {/* Hero Section */}
      <div className='flex lg:flex-row justify-between items-center bg-gray1 w-full max-w-6xl p-6 rounded-3xl'>
        {/* Left Content */}
        <div className='text-center lg:text-left space-y-4'>
          <h1 className='text-[32px] md:text-[40px] font-[800] text-primary leading-tight'>
            Celebrate Love with Exclusive <br className='hidden md:block' />
            Valentine’s Discounts!
          </h1>
          <p className='text-gray-700 text-base md:text-lg'>
            Find the perfect gift for your loved ones this{' '}
            <br className='hidden md:block' />
            Valentine’s season!
          </p>
          <button
            className='flex justify-center items-center gap-2 bg-primary w-40 cursor-pointer py-2 px-4 rounded-2xl text-black font-bold hover:bg-red-400 transition duration-300 hover:-translate-y-1 mx-auto lg:mx-0'
            onClick={() => {
              handleshopButton();
            }}
          >
            <p>Shop Now</p>
            <IoBagHandleOutline className='text-2xl md:text-3xl' />
          </button>
        </div>
        {/* Right Content: Slider */}
        <div className='w-full hidden md:block max-w-md mt-6 lg:mt-0'>
          <HeroSlider />
        </div>
      </div>

      {/* Filtering / Sorting / Searching */}
      <div className='flex flex-wrap justify-center items-center mt-5 gap-4 w-full px-4'>
        {/* Search Bar */}

        <div className='flex bg-white rounded-full sm:w-80 px-4 py-2'>
          <form
            onSubmit={handleSearch}
            className='flex items-center justify-between w-full'
          >
            <input
              type='text'
              name='search'
              placeholder='Search Products'
              className='text-gray-700 border-none outline-none flex-1'
            />
            <button type='submit'>
              <FiSearch className='text-black hover:text-red-400 transition duration-300 cursor-pointer' />
            </button>
          </form>
        </div>

        {/* Dropdown Buttons */}
        {['Category', 'Popularity', 'Price'].map((filter, index) => (
          <button
            key={index}
            className='flex justify-center items-center bg-white w-36 h-10 rounded-full border border-gray-300 px-4 text-sm'
          >
            <span>{filter}</span>
            <IoMdArrowDropdown />
          </button>
        ))}
      </div>

      {/* Products */}
      <div className='w-full max-w-6xl px-4'>
        <ProductGallery />
      </div>

      {/* Show More Button */}
      <button
        className='rounded-lg border border-black w-40 h-10 mt-4 text-sm hover:bg-primary transition duration-300 active:bg-red-300'
        onClick={() => navigate('/products')}
      >
        Show More
      </button>

      {/* User Reviews */}
      <div className='w-full max-w-6xl px-4 mt-10'>
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
