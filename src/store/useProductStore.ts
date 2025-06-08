import { create } from 'zustand';
import { Product, ProductStore } from '../types';
import { products } from '../fixtures';

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  selectedProduct: null,

  fetchProducts: async () => {
    try {
      const data = products;
      set({ products: data });
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  },

  setSelectedProduct: (product: Product) => set({ selectedProduct: product }),
}));
