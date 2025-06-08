import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Product } from "../../types"
import MinusIcon from "../../assets/icons/minus";
import PlusIcon from "../../assets/icons/plus";
import TrashIcon from "../../assets/icons/trash";
import { useCart } from "../../context/cart";

type CartCardProps = {
  product: Product;
  quantityOrdered: number;
}

const CartCard: React.FC<CartCardProps> = ({ product, quantityOrdered }) => {
  const { updateItemQuantity, removeFromCart } = useCart();

  return (
    <View style={styles.container}>
      <Image
        source={product.image}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {`${product.name || ''}${product.capacity ? ' ' + product.capacity : ''}${product.color ? ' | ' + product.color : ''}`}
        </Text>
        <Text style={styles.price}>${(product.price * quantityOrdered)?.toFixed(2)}</Text>
        <Text
          style={[
            styles.stock,
            product.quantity > quantityOrdered ? styles.instock : styles.outofstock,
          ]}
        >
          {product.quantity > quantityOrdered ? 'In stock' : 'Out of stock'}
        </Text>
        <View style={styles.cartupdate}>
          <View style={styles.addremcartitem}>
            <TouchableOpacity
              style={quantityOrdered <= 1 ? styles.inactive : styles.active}
              onPress={() => updateItemQuantity(product.id,quantityOrdered - 1)}
              disabled={quantityOrdered === 1}
            >
              <MinusIcon />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantityOrdered}</Text>
            <TouchableOpacity
              style={quantityOrdered < product.quantity ? styles.active : styles.inactive}
              onPress={() => updateItemQuantity(product.id,quantityOrdered + 1)}
              disabled={quantityOrdered >= product.quantity}
            >
              <PlusIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.removecartitem} onPress={() => removeFromCart(product.id)}>
            <TrashIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    backgroundColor: '#F6F5F8',
    borderRadius: 15,
    padding: 10,
  },
  image: {
    width: 102.87,
    height: 106.15,
    borderRadius: 5.65,
  },
  info: {
    flexDirection: 'column',
    gap: 4,
    maxWidth: 200,
  },
  name: {
    color: '#334155',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  price: {
    color: '#334155',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 32,
  },
  stock: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
  },
  instock: {
    color: '#10B981'
  },
  outofstock: {
    color: '#10B981'
  },
  cartupdate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  addremcartitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    width: '50%',
  },
  quantity: {
    color: '#334155',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },
  inactive: {
    backgroundColor: '#E2E8F0',
    padding: 8,
    borderRadius: '100%',
  },
  active: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 8,
    borderRadius: '100%',
  },
  removecartitem: {
    backgroundColor: '#FFFFFF',
    padding: 8.18,
    borderRadius: '100%',
  }
})