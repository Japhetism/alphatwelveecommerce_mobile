import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/components/navigation/bottomTab';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
