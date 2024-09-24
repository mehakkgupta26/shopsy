import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import db from "../db.json";
import Productpage from "./Productpage";

const categorydata = db.categories;

export default function Categories({ navigation }: any) {
  const handlecategoryclick = (navigation: any) => {
    navigation.navigate("Productpage");
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          backgroundColor: "lavender",
          fontWeight: "bold",
          fontStyle: "italic",
          fontSize: 25,
          padding: 11,
          marginTop: 0,
          color: "blueviolet",
          marginBottom: 10,
        }}
      >
        Categories
      </Text>
      <View style={{}}>
        <FlatList
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={styles.categorylist}
          data={categorydata}
          renderItem={({ item }) => (
            <Pressable
              style={styles.categorycontainer}
              onPress={() =>
                navigation.navigate("Productpage", {
                  categoryName: item.category,
                })
              }
            >
              {/* <View > */}
              <Text
                style={{
                  fontSize: 16,
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                {item.category}
              </Text>
              <Image source={{ uri: item.image_url }} style={styles.img} />
              {/* </View> */}
            </Pressable>
          )}
        />
      </View>
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
  categorylist: {
    //marginVertical: 20,
  },
  categorycontainer: {
    // borderWidth: 1,
    borderColor: "grey",
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 15,
    // backgroundColor: "lavender",
  },
  img: {
    height: 150,
    width: "100%",
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
  },
});
