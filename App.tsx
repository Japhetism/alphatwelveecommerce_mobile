import React from 'react';
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import AppNavigator from './src/components/navigation/appNavigator';
import { CartProvider } from './src/context/cart';
import CustomToast from './src/components/customToast';

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
