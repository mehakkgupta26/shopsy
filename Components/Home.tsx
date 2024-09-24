import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginVertical: 10, fontWeight: "bold" }}>
        Welcome to home page!
      </Text>
      <Image
        style={{ height: 400, width: 500 }}
        source={{
          uri: "https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories_335657-793.jpg",
        }}
      />
      <Text
        style={{
          fontSize: 15,
          marginHorizontal: 10,
          textAlign: "center",
          fontStyle: "italic",
          marginTop: 18,
        }}
      >
        {" "}
        Shopping is a bit of relaxing hobby for me, which is sometimes troubling
        for the bank balance.{" "}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Categories")}
        style={{
          marginVertical: 25,
          backgroundColor: "lavender",
          padding: 15,
          // borderWidth: 1,
          borderRadius: 30,
          borderColor: "purple",
        }}
      >
        <Text
          style={{ fontSize: 16, fontWeight: "light", fontStyle: "italic" }}
        >
          Categories Page
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
