import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLayout from '../../components/layout';

const HomeScreen = () => {
  return (
    <AppLayout>
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </AppLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});