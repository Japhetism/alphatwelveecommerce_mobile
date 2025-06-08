import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLayout from '../../components/layout';

const FavouritesScreen = () => {
  return (
    <AppLayout title="Favourite" showSearch={false}>
      <View style={styles.container}>
        <Text>Favourite Screen</Text>
      </View>
    </AppLayout>
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