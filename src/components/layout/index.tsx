import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from '../appBar';

type AppLayoutProps = {
  title: string;
  showSearch: boolean;
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ 
  title,
  showSearch,
  children
}) => {
  return (
    <View style={styles.container}>
      <AppBar
        title={title}
        showSearch={showSearch}
      />
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