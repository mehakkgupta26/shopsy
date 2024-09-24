import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Home from "./Components/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "./Components/Categories";
import Cart from "./Components/Cart";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Productpage from "./Components/Productpage";
import { CartProvider } from "./contexts/CartContext";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyStackNavigator = () => {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "lavender",
        },
      }}
    >
      <Stack.Screen
        name="Category"
        component={Categories}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            color: "purple",
            fontSize: 20,
            // fontStyle: "italic",
          },
        }}
      />
      <Stack.Screen name="Productpage" component={Productpage} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
 <CartProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: "My Shopsy",
          headerRight: () => (
            <FontAwesome name="battery" size={20} style={{ marginRight: 30 }} />
          ),

          headerTitleStyle: {
            fontWeight: "bold",
            color: "purple",
            fontSize: 25,
            fontStyle: "italic",
          },

          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "lavender",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color = "black", size }) => (
              <Ionicons name="home" color="black" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={MyStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="list" color="black" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-cart" color="black" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}
