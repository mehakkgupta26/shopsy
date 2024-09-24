import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, Alert, Pressable } from 'react-native';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();

  // Calculate total price of all items
  const totalValue = cartItems.reduce((total: number, item: any) => total + item.price * item.count, 0);

  const handlePay = () => {
    if (cartItems.length === 0) {
      Alert.alert('Error', 'Your cart is empty');
      return;
    }
    Alert.alert('Success', 'Congratulations, you made a purchase!');
    clearCart();
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.cartItem}>
            
      <Image source={{ uri: item.image_url }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <View style= {{ flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>Rs. {item.price} x {item.count}</Text>
        </View>
  
        
        {/* <Text style={styles.itemCount}>Quantity: {item.count}</Text> */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
        <Text style = {{ fontSize: 20, fontWeight: 'bold', fontStyle:'italic' , textAlign:'center', marginVertical: 20 }}> Review item and Shipping Costs </Text>
          <FlatList 
            data={cartItems} 
            renderItem={renderItem} 
            keyExtractor={(item) => item.id} 
          />
          <View style={styles.footer}>
            <Text style={styles.totalValue}>Total: Rs. {totalValue}</Text>
            <View style={styles.buttonContainer}>
              <Pressable onPress={clearCart} style = {styles.bottombutton}>
                <Text>
                Clear Cart
                  </Text>
                </Pressable> 
                <Pressable onPress={handlePay} style = {styles.bottombutton}>
                <Text>
               Pay
                  </Text>
                </Pressable> 
         
            </View>
          </View>
        </>
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  itemCount: {
    fontSize: 12,
    color: 'darkslategray',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyCartText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  bottombutton : {
    marginTop:10,
    paddingVertical:15,
    paddingHorizontal: 20,
    backgroundColor:"lavender",
    borderRadius:20,

  }
});

export default CartPage;
