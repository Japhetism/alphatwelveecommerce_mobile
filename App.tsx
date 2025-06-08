import React from 'react';
import AppNavigator from './src/components/navigation/appNavigator';
import { CartProvider } from './src/context/cart';

const App = () => {
  return  (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  )
};

export default App;
