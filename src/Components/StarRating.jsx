import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  return (
    <div className='flex gap-1'>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size={20}
          color={index < rating ? '#ff5757' : '#d9d9d9'}
        />
      ))}
    </div>
  );
};

export default StarRating;