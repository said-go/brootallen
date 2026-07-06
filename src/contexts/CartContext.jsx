import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

const readStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

const getCartKey = (product) => `${product.id}-${product.selectedColor || 'default'}-${product.selectedSize || 'default'}`;

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => readStorage('brootallen-cart', []));
  const [favorites, setFavorites] = useState(() => readStorage('brootallen-favorites', []));

  useEffect(() => {
    localStorage.setItem('brootallen-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('brootallen-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (product, quantity = 1) => {
    setCart((current) => {
      const cartKey = getCartKey(product);
      const existing = current.find((item) => item.cartKey === cartKey);

      if (existing) {
        return current.map((item) => (item.cartKey === cartKey ? { ...item, quantity: item.quantity + quantity } : item));
      }

      return [...current, { ...product, cartKey, quantity }];
    });
  };

  const removeFromCart = (cartKey) => {
    setCart((current) => current.filter((item) => item.cartKey !== cartKey));
  };

  const updateQuantity = (cartKey, quantity) => {
    setCart((current) => current.map((item) => (item.cartKey === cartKey ? { ...item, quantity: Math.max(1, quantity) } : item)));
  };

  const toggleFavorite = (productId) => {
    setFavorites((current) => (current.includes(productId) ? current.filter((item) => item !== productId) : [...current, productId]));
  };

  const value = useMemo(
    () => ({
      cart,
      favorites,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleFavorite,
      totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }),
    [cart, favorites]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
