import { createContext, useState, useEffect, useContext } from 'react';
import productsData from '../data/db.json';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate async loading for consistency
    setTimeout(() => {
      setProducts(productsData.products);
      setLoading(false);
    }, 100);
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
