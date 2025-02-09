import { createContext, useContext, useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setAllProducts(data);
    };

    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ allProducts, searchQuery, setSearchQuery }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
