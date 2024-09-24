import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define CartItem type
type CartItem = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  count: number;
};

// Define CartContextType
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  clearCart: () => void;
};

// Initialize the context with undefined
export const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // If item already exists, increase the count
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, count: i.count + 1 } : i
        );
      }
      // If item doesn't exist, add it with count 1
      return [...prevItems, { ...item, count: 1 }];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Helper hook to use CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

