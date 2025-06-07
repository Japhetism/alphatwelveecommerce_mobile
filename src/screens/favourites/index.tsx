import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavouritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favourite Screen</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});