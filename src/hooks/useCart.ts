import { useState, useCallback, useEffect, useMemo } from 'react';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartItem, Product } from '../types';

const STORAGE_KEY = '@cart_items';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        if (jsonValue != null) {
          setCartItems(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error('Failed to load cart from storage', e);
        Toast.show({
          type: 'error',
          text2: 'Something went wrong while loading your cart.',
        });
      } finally {
        setLoading(false);
      }
    };
    loadCart();
  }, []);

  useEffect(() => {
    if (!loading) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems)).catch((e) => {
        console.error('Failed to save cart to storage', e);
        Toast.show({
          type: 'error',
          text2: 'Could not save your cart. Try again later.',
        });
      });
    }
  }, [cartItems, loading]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        Toast.show({
          type: 'success',
          text2: 'Item has been added to cart',
        });

        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantityOrdered: item.quantityOrdered + quantity }
            : item
        );
      }

      Toast.show({
        type: 'success',
        text2: 'Item has been added to cart',
      });

      return [...prevItems, { product, quantityOrdered: quantity }];
    });
  }, []);


  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  }, []);

  const updateItemQuantity = useCallback(
    (productId: string, newQuantity: number) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === productId
            ? { ...item, quantityOrdered: newQuantity }
            : item
        )
      );
    },
    []
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantityOrdered,
      0
    );
  }, [cartItems]);

  const shippingCost = useMemo(() => {
    return subtotal * 0.1;
  }, [subtotal]);

  const totalCost = useMemo(() => {
    return subtotal + shippingCost;
  }, [subtotal, shippingCost]);

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantityOrdered, 0);
  }, [cartItems]);

  const uniqueItemCount = useMemo(() => cartItems.length, [cartItems]);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearCart,
    loading,
    subtotal,
    shippingCost,
    totalCost,
    cartItemCount,
    uniqueItemCount,
  };
};