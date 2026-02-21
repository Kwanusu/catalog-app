import { useState, useEffect, useMemo } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // We fetch a larger limit to ensure we have enough data to filter "Deals"
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // --- DERIVED DATA ---
  
  // 1. Filtered Products (Search + Category)
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  // 2. Deals (Discount > 15%)
  const deals = useMemo(() => {
    return products
      .filter((p) => p.discountPercentage >= 15)
      .sort((a, b) => b.discountPercentage - a.discountPercentage);
  }, [products]);

  // 3. New Arrivals (Higher IDs or recent Meta data)
  const newArrivals = useMemo(() => {
    return [...products]
      .sort((a, b) => b.id - a.id) // Assuming higher ID = newer
      .slice(0, 10);
  }, [products]);

  return { 
    products: filteredProducts, 
    deals, 
    newArrivals, 
    loading, 
    error, 
    setSearch, 
    setCategory 
  };
};