import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React, { useContext } from "react";
import db from "../db.json";
import { FontAwesome } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";

export default function Productpage({ route, navigation }: any) {
  const { categoryName } = route.params; // Access the passed category name

  const productdetails = db.products.filter(
    (productdetails) => productdetails.category === categoryName
  );

  const cartContext = useContext(CartContext);

  // Handle the case where the context might be undefined
  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { addToCart } = cartContext;

  const handleAddToCart = (product: any) => {
    addToCart(product);
    alert(`${product.name} added to cart`); // Now it should show the correct name
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={25} color="black" />
        </Pressable>
        <Text
          style={{
            marginLeft: 10,
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: 20,
            color: "blueviolet",
          }}
        >
          Categories / {categoryName}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          fontStyle: "italic",
          textAlign: "center",
          margin: 10,
        }}
      >
        {categoryName}! For You
      </Text>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={productdetails}
        renderItem={({ item }) => (
          <View style={styles.productcontainer}>
            <Image source={{ uri: item.image_url }} style={styles.img} />
            <View
              style={{
                flexDirection: "row",
                gap: 45,
                justifyContent: "space-between",
              }}
            >
              <View style={{ gap: 4, justifyContent: "center" }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  Rs.{item.price}
                </Text>
              </View>
              <Pressable onPress={() => handleAddToCart(item)}>
                <Text>
                  <FontAwesome name="plus" size={20} color="purple" />
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 50,
    marginTop: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 11,
    marginBottom: 10,
    marginTop: 0,
    backgroundColor: "lavender",
  },
  productcontainer: {
    flex: 1,
    borderColor: "grey",
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginHorizontal: 5,
  },
  img: {
    height: 189,
    width: "60%",
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
  },
});
