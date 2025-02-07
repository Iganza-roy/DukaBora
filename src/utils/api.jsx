import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    return [];
  }
};

const PEXELS_API_KEY =
  'MT6U56AKkZg0NEAZYXckXFxpeizoZ63x3JCTJLfS8HUFFnCBGqmPJiew'; // Replace with your API key
const PEXELS_API_URL = 'https://api.pexels.com/v1/search';

/**
 * Fetch jewelry images from Pexels API
 */
export const fetchJewelryImages = async () => {
  try {
    const response = await axios.get(PEXELS_API_URL, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      params: {
        query: 'jewelry',
        per_page: 100,
      },
    });

    return response.data.photos.map((photo) => photo.src.large);
  } catch (error) {
    console.error('Error fetching images from Pexels:', error);
    return [];
  }
};
