import { useCart as useCartContext } from '../context/CartContext';

export function useCart() {
  const cart = useCartContext();
  
  // Add cart logic here
  
  return cart;
}
