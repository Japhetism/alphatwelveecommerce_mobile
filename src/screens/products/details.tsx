import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppLayout from "../../components/layout";
import { useProductStore } from "../../store/useProductStore";

const ProductDetailsScreen = () => {
  const { selectedProduct } = useProductStore();

  const bulletPoints = [
    "This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.",
    "There will be no visible cosmetic imperfections when held at an arm’s length."
  ];

  return (
    <AppLayout>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={selectedProduct?.image}
            resizeMode="contain"
            style={styles.image}
          />
          <View style={styles.information}>
            <Text style={styles.name}>
              {selectedProduct?.name} | {selectedProduct?.color}
            </Text>
            <Text style={styles.price}>
              ${selectedProduct?.price?.toFixed(2)}
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.bulletText}>About this item</Text>
            {bulletPoints.map((point, index) => (
              <View key={index} style={styles.bulletItem}>
                <View style={styles.bulletCircle} />
                <Text style={styles.bulletText}>{point}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </AppLayout>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  image: {
    width: "100%",
    height: 331.6,
  },
  information: {
    flexDirection: 'column',
    marginTop: 15,
  },
  name: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '400',
  },
  price: {
    color: '#000000',
    fontSize: 32.75,
    fontWeight: '700',
    marginTop: 8,
  },
  descriptionContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bulletCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#999999',
    marginTop: 6,
    marginRight: 10,
  },
  bulletText: {
    flex: 1,
    color: '#999999',
    fontSize: 14,
    fontWeight: '400',
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
});