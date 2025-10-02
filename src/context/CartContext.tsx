'use client';

import { createContext, useContext } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
