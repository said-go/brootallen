import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const FavoritesContext = createContext(null);

const readStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => readStorage('brootallen-favorites', []));

  useEffect(() => {
    localStorage.setItem('brootallen-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId) => {
    setFavorites((current) => (current.includes(productId) ? current.filter((item) => item !== productId) : [...current, productId]));
  };

  const value = useMemo(
    () => ({
      favorites,
      toggleFavorite
    }),
    [favorites]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};
