import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AppLayout from '../../components/layout';
import ProductCard from '../../components/card/productCard';
import LoadingSpinner from '../../components/loader/loadingSpinner';
import { useProductStore } from '../../store/useProductStore';
import { Text } from 'react-native-svg';

const ProductListScreen = () => {
  const { fetchProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  },[]);

  console.log("isLoading, ", isLoading)

  return (
    <AppLayout title="Technology" showSearch>
      <View style={styles.container}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ProductCard product={item} />}
            contentContainerStyle={styles.list}
            numColumns={2}
            columnWrapperStyle={{ gap: 10 }} 
          />
        )}
      </View>
    </AppLayout>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 16,
  },
});