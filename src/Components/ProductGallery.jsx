import { useEffect, useState, useContext } from 'react';
import { fetchProducts } from '../utils/api';
import { useUser } from '@clerk/clerk-react';
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ProductGallery = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };

    getProducts();
  }, []);

  return (
    <div className='w-full p-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer'>
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
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <div className='flex justify-between items-center'>
                <h3
                  className='text-md text-black font-bold truncate w-45'
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.title}
                </h3>
                <p className='text-sm text-black font-bold'>${product.price}</p>
              </div>
              <p className='truncate w-50 text-black text-xs font-light'>
                {product.description}
              </p>
              <StarRating rating={product.rating.rate} />
              <button
                className='rounded-2xl border text-black border-primary w-25 h-8 mt-2 text-sm hover:bg-primary hover:transform duration-300 active:bg-red-300'
                onClick={() =>
                  isSignedIn
                    ? addToCart(product, product.id)
                    : navigate('/login')
                }
              >
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
