import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotalAmount(total);
  });

  useEffect(() => {
    if (cartItems) {
      const amount = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cartItems]);

  // Add to Cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cartItems.find((item) => {
      return item.id === id;
    });
    toast.success('Item added to cart');
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
    toast.success('Item removed from cart');
    setCartItems(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCartItems([]);
    toast.success('Cart cleared!');
  };

  const increaseAmount = (id) => {
    const cartItem = cartItems.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cartItems.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCartItems(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for easy access
export const useCart = () => useContext(CartContext);
