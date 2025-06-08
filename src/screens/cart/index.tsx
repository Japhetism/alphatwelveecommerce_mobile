import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import CartCard from '../../components/card/cartCard';
import AppLayout from '../../components/layout';
import { useCart } from '../../context/cart';

const CartScreen = () => {
  const { cartItems, subtotal, shippingCost, totalCost, loading } = useCart();

  return (
    <AppLayout title="Your Cart" showSearch={false}>
      {cartItems.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.product.id.toString()}
            renderItem={({ item }) => (
              <CartCard product={item.product} quantityOrdered={item.quantityOrdered} />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          />
          <View style={styles.btncontainer}>
            <View style={styles.priceInfo}>
              <Text style={styles.orderInfo}>Order Info</Text>
              <View style={styles.detailsSection}>
                <Text style={styles.otherInfo}>Subtotal</Text>
                <Text style={styles.otherInfo}>${subtotal?.toFixed(2)}</Text>
              </View>
              <View style={styles.detailsSection}>
                <Text style={styles.otherInfo}>Shipping</Text>
                <Text style={styles.otherInfo}>${shippingCost?.toFixed(2)}</Text>
              </View>
              <View style={styles.detailsSection}>
                <Text style={styles.otherInfo}>Total</Text>
                <Text style={styles.orderInfo}>${totalCost?.toFixed(2)}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{`Checkout ($${totalCost?.toFixed(2)})`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.emptycartcontainer}>
          <Text>You haven’t added any items to your cart yet.</Text>
          <TouchableOpacity>
            <Text style={styles.shopnow}>Shop now</Text>
          </TouchableOpacity>
        </View>
      )}
    </AppLayout>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },
  btncontainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },
  button: {
    backgroundColor: '#60B5FF',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  detailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderInfo: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
  },
  otherInfo: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
  },
  priceInfo: {
    flexDirection: 'column',
    gap: 15,
  },
  emptycartcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  shopnow: {
    color: '#60B5FF',
    fontWeight: '700',
    fontSize: 17,
  }
});