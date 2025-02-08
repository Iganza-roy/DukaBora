import { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';

const ProductGallery = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };

    getProducts();
  }, []);

  return (
    <div className='w-full p-6'>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer'
        onClick={() => navigate('/products/${product.id}')}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className='rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300'
            >
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-60 object-cover rounded-xl shadow-sm'
              />
              <div className='flex justify-between items-center'>
                <h3 className='text-md text-black font-bold truncate w-45'>
                  {product.title}
                </h3>
                <p className='text-sm text-black font-bold'>${product.price}</p>
              </div>
              <p className='truncate w-50 text-black text-xs font-light'>
                {product.description}
              </p>
              <StarRating rating={product.rating.rate} />
              <button className='rounded-2xl border text-black border-primary w-25 h-8 mt-2 text-sm hover:bg-primary hover:transform duration-300 active:bg-red-300'>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className='text-center col-span-full text-gray-500'>
            Loading products...
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
