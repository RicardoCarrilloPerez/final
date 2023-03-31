import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Product } from './App';

type CartProps = {
  cart: Product[];
  budget: number;
  onRemoveFromCart: (product: Product) => void;
}

const Cart = ({ cart, budget, onRemoveFromCart }: CartProps) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => onRemoveFromCart(item)} style={styles.item}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      <View style={styles.removeButton}>
        <Text style={styles.removeButtonText}>-</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.budget}>Budget: ${budget}</Text>
      <Text style={styles.totalPrice}>Total price: ${totalPrice}</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  budget: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  removeButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;