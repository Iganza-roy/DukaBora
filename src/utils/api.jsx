import axios from 'axios';
import { toast } from 'sonner';
import process from 'process';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const PEXELS_API_KEY = process.env.REACT_APP_PEXELS_API_KEY;
const PEXELS_API_URL = process.env.REACT_APP_PEXELS_API_URL;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    return [];
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(BASE_URL, productData);
    toast.success('Product created successfully');
    console.log('Product created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error.message);
    throw new Error('Failed to create product');
  }
};

export const updateProduct = async (productId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${productId}`, updatedData);
    toast.success('Product updated successfully');
    console.log('Product updated:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error.message);
    throw new Error('Failed to update product');
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${productId}`);
    toast.success('Product deleted successfully');
    console.log('Product deleted:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error.message);
    throw new Error('Failed to delete product');
  }
};

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
        query: 'products',
        per_page: 100,
      },
    });

    return response.data.photos.map((photo) => photo.src.large);
  } catch (error) {
    console.error('Error fetching images from Pexels:', error);
    return [];
  }
};
