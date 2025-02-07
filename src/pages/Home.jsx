import { IoBagHandleOutline } from 'react-icons/io5';
import HeroSlider from '../utils/HeroSlider';

const Home = () => {
  return (
    <div className='flex text-black justify-center'>
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
    </div>
  );
};

export default Home;
