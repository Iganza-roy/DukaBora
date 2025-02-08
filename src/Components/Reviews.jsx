import { useNavigate } from 'react-router-dom';
import clientHandshake from '../assets/handshake.jpg';
import ClientReviews from '../assets/ReviewsData';
import { useUser } from '@clerk/clerk-react';

const Reviews = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  const handleshopButton = () => {
    if (isSignedIn) {
      navigate('/products');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between md:w-220 md:gap-5 gap-10'>
      <div className='relative group mt-4 hover:shadow-md px-3 py-3 h-[350px] w-[300px] lg:h-[400px] lg:w-[360px]'>
        <div
          className='absolute inset-0 bg-cover rounded-4xl bg-center group-hover:shadow-lg group-hover:shadow-blue/30 group-hover:rotate-1 group-hover:scale-105 transition-all duration-300 ease-in-out hover:skew-x-2 hover:skew-y-1'
          style={{ backgroundImage: `url(${clientHandshake})` }}
        />
        <div className='absolute inset-0 rounded-4xl bg-primary opacity-10 group-hover:opacity-40 group-hover:shadow-lg group-hover:shadow-blue/30 group-hover:rotate-1 group-hover:scale-105 transition-all duration-300 ease-in-out hover:skew-x-0.5 hover:skew-y-1' />
        <div className='relative flex flex-col justify-between items-center h-full w-full'>
          <h1 className='text-white text-shadow text-xl lg:text-3xl font-bold'>
            Hear from Our Satisfied Clients
          </h1>
          <div className='w-full flex flex-col gap-2'>
            <h1 className='text-white drop-shadow-lg'>
              Join Our Happy Customers
            </h1>
            <div className='flex justify-between items-center'>
              <button
                className=' bg-white w-28 cursor-pointer py-2 px-2 rounded-2xl text-black font-[600] hover:bg-red-100 hover:transform duration-300 hover:-translate-y-1'
                onClick={() => {
                  handleshopButton();
                }}
              >
                <p>Shop Now!</p>
              </button>
              <p className='text-4xl text-white font-[700]'>5k+</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ClientReviews />
      </div>
    </div>
  );
};

export default Reviews;
