import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import CartCard from '../../components/card/cartCard';
import AppLayout from '../../components/layout';
import { useCart } from '../../context/cart';

const CartScreen = () => {
  const { cartItems, loading } = useCart();

  useEffect(() => {
    
    console.log("cart item ", cartItems);
  }, [cartItems])

   if (loading) return <Text>Loading...</Text>;

  return (
    <AppLayout>
      <View style={styles.container}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.product.id.toString()}
          renderItem={({ item }) => (
            <CartCard product={item.product} quantityOrdered={item.quantityOrdered} />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>
    </AppLayout>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});