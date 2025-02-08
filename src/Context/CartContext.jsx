import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to Cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cartItems.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cartItems].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newCart);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    const newCart = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for easy access
export const useCart = () => useContext(CartContext);
