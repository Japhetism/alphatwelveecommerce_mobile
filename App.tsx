import React from 'react';
import Toast, { ToastConfig } from 'react-native-toast-message';
import AppNavigator from './src/components/navigation/appNavigator';
import CustomToast from './src/components/customToast';
import { CartProvider } from './src/context/cart';

const toastConfig: ToastConfig = {
  success: (props) => <CustomToast {...props} />,
  error: (props) => <CustomToast {...props} />,
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
