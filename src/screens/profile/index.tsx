import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLayout from '../../components/layout';

const ProfileScreen = () => {
  return (
    <AppLayout title="Profile" showSearch={false}>
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    </AppLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});