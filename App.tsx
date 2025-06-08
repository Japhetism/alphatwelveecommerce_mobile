import React from 'react';
import Toast, { BaseToastProps } from 'react-native-toast-message';
import AppNavigator from './src/components/navigation/appNavigator';
import CustomToast from './src/components/customToast';
import { CartProvider } from './src/context/cart';

const toastConfig = {
  success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => <CustomToast {...props} />,
};

const App = () => {
  return  (
    <CartProvider>
      <AppNavigator />
      <Toast config={toastConfig} />
    </CartProvider>
  )
};

export default App;
