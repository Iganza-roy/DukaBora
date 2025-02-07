import { useEffect, useState } from 'react';
import { fetchJewelryImages } from '../utils/api'; // Import the function
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const HeroSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const imageUrls = await fetchJewelryImages();
      setImages(imageUrls);
    };

    getImages();
  }, []);

  return (
    <div className='items-center w-full max-w-sm mx-auto pr-10 hidden md:block'>
      {images.length > 0 ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          className='mySwiper w-full'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className='flex justify-center'>
              <img
                src={image}
                alt={`Slide ${index}`}
                className='w-full h-60 object-cover rounded-xl mb-7'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default HeroSlider;
