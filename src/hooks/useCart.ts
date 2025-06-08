import { useState, useCallback, useEffect } from 'react';
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
      } finally {
        setLoading(false);
      }
    };
    loadCart();
  }, []);

  useEffect(() => {
    if (!loading) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems)).catch((e) =>
        console.error('Failed to save cart to storage', e)
      );
    }
  }, [cartItems, loading]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantityOrdered: item.quantityOrdered + quantity }
            : item
        );
      }

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

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearCart,
    loading,
  };
};