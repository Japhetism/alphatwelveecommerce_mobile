import { create } from 'zustand';
import { Product, ProductStore } from '../types';
import { products } from '../fixtures';

export const useProductStore = create<ProductStore>((set) => ({
  isLoading: false,
  products: [],
  selectedProduct: null,
  setIsLoading: (isLoading) => set({ isLoading }),
  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = products;
      set({ products: data });
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      set({ isLoading: false });
    }
  },
  setSelectedProduct: (product: Product) => set({ selectedProduct: product }),
}));
