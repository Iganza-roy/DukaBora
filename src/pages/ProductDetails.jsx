import { useNavigate, useParams } from 'react-router-dom';
import { fetchProducts } from '../utils/api';
import { CiDeliveryTruck } from 'react-icons/ci';
import { TbTruckDelivery } from 'react-icons/tb';
import { useUser } from '@clerk/clerk-react';
import { SideBarContext } from '../Context/SideBarContext';
import { CartContext, useCart } from '../Context/CartContext';
import { useContext, useEffect, useState } from 'react';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { handleOpen } = useContext(SideBarContext);
  const { addToCart } = useContext(CartContext);
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        const singleProduct = data.find((item) => item.id === parseInt(id));
        setProduct(singleProduct);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    getProducts();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>
        <img
          src={product.image}
          alt={product.title}
          className='rounded-lg object-cover h-130'
        />

        <div className='flex flex-col w-full md:w-1/2'>
          <h1 className='text-3xl font-bold text-gray-800'>{product.title}</h1>
          <p className='text-sm text-gray-500 mt-2'>{product.category}</p>
          <p className='text-gray-600 mt-4 border-b-1 py-2'>
            {product.description}
          </p>
          <div className='border-b-1 border-black py-2'>
            <p className='text-3xl font-bold text-black mt-4'>
              ${product.price.toFixed(2)}
            </p>
            <p className='text-black'>Pay Online or Pay On delivery</p>
          </div>
          <div className='flex items-center gap-4 justify-center border-b-1 border-black py-5'>
            <button className='bg-primary text-black px-8 py-3 rounded-3xl font-bold hover:bg-red-400 transition'>
              Buy Now
            </button>
            <button
              className='border border-primary text-black font-bold px-8 py-3 rounded-3xl hover:bg-red-400 transition'
              onClick={() => addToCart(product, product.id)}
            >
              Add to Cart
            </button>
          </div>

          <div className='mt-6 space-y-2 flex flex-col '>
            <div className='flex items-center gap-4 border-gray1 rounded-lg border-1 p-4'>
              <CiDeliveryTruck size={24} className='text-black' />
              <div className='flex flex-col'>
                <p className='text-lg text-gray-600'>
                  Free Delivery Within CBD
                </p>
                <p className='text-slate-400 text-sm underline'>
                  Be sure to share your location
                </p>
              </div>
            </div>
            <div className='flex items-center gap-4 border-gray1 rounded-lg border-1 p-4'>
              <TbTruckDelivery size={24} className='text-black' />
              <div className='flex flex-col'>
                <p className='text-lg text-gray-600'>Return Delivery</p>
                <p className='text-slate-400 text-sm underline'>
                  Free 30 days delivery return. Details Here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-8'>
        <buttom
          className='bg-primary text-white px-6 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer'
          onClick={handleOpen}
        >
          View Cart
        </buttom>
      </div>
    </div>
  );
};

export default SingleProductPage;
