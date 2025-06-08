export type IconProps = {
  color?: string;
  size?: number;
}

export type Product = {
  id: string;
  name: string;
  color?: string;
  capacity?: string;
  description?: string;
  price: number;
  image: any;
  quantity: number;
  about?: Array<string>;
}

export type ProductStore = {
  isLoading: boolean;
  products: Product[];
  selectedProduct: Product | null;
  fetchProducts: () => Promise<void>;
  setIsLoading: (isLoading: boolean) => void;
  setSelectedProduct: (product: Product) => void;
}

export type CartItem = {
  product: Product;
  quantityOrdered: number;
}

export type CartContextType = {
  subtotal: number;
  shippingCost: number;
  totalCost: number;
  cartItemCount: number;
  uniqueItemCount: number;
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateItemQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
  loading: boolean;
};