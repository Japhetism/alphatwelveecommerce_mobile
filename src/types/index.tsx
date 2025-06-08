export type IconProps = {
  color: string;
  size: number;
}

export type Product = {
  name: string;
  color?: string;
  capacity?: string;
  description?: string;
  price: number;
  image: any;
}

export type ProductStore {
  products: Product[];
  selectedProduct: Product | null;
  fetchProducts: () => Promise<void>;
  setSelectedProduct: (product: Product) => void;
}