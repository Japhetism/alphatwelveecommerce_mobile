import React, { useState, useEffect } from 'react';
import Toast, { ToastConfig } from 'react-native-toast-message';
import AppNavigator from './src/components/navigation/appNavigator';
import CustomToast from './src/components/customToast';
import { CartProvider } from './src/context/cart';
import SplashScreen from './src/components/splashscreen';

const toastConfig: ToastConfig = {
  success: (props) => <CustomToast {...props} />,
  error: (props) => <CustomToast {...props} />,
};

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen onFinish={() => setIsSplashVisible(false)} />;
  }

  return (
    <CartProvider>
      <AppNavigator />
      <Toast config={toastConfig} />
    </CartProvider>
  );
};

export default App;