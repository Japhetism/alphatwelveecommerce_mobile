import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product } from '../../types';
import { useProductStore } from '../../store/useProductStore';
import { RootStackParamList } from '../navigation/appNavigator';

type ProductCardProps = {
  product: Product,
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setSelectedProduct } = useProductStore();
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity onPress={() => {
      setSelectedProduct(product)
      navigation.navigate('ProductDetails')
    }}>
      <Image
        source={product.image}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.information}>
        <Text style={styles.otherlabel} numberOfLines={1} ellipsizeMode="tail">{product.name}</Text>
        {(product.capacity || product.color) && (
          <Text style={styles.otherlabel} numberOfLines={1} ellipsizeMode="tail">
            {`${product.capacity} | ${product.color}`}
          </Text>
        )}
        {product.description && (
          <Text style={styles.otherlabel} numberOfLines={1} ellipsizeMode="tail">
            {product.description}
          </Text>
        )}
        <Text style={styles.pricelabel}>${product.price?.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    width: 162,
    height: 162,
  },
  pricelabel: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 700,
    width: 162,
  },
  otherlabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 400,
    width: 162,
  },
  information: {
    flexDirection: "column",
    gap: 4,
    marginTop: 10,
    marginBottom: 30,
  }
})