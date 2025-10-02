'use client';

import { createContext, useContext } from 'react';

// Define the cart item type
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

// Define the type for your cart context
interface CartContextType {
  items: CartItem[];
  addItem?: (item: CartItem) => void;
  removeItem?: (id: string) => void;
  updateQuantity?: (id: string, quantity: number) => void;
  clearCart?: () => void;
  totalItems?: number;
  totalPrice?: number;
}

// Create context with proper type
const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Placeholder cart state - you'll implement this later
  const cartValue: CartContextType = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
