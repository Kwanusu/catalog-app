const BASE_URL = 'https://dummyjson.com';

export const fetchAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products?limit=20`);
  if (!response.ok) throw new Error('Failed to reach the server');
  
  const data = await response.json();
  // DummyJSON returns { products: [...], total: 100, ... }
  return data.products; 
};