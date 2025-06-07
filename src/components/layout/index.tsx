import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from '../appBar';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});