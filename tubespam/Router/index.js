import React from "react";
import { StyleSheet, TouchableOpacity, Button, Text, View} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/all/Login";
import HeaderButton from "../components/header/Header";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Register from "../components/all/Register";


const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={({ route, navigation }) => ({
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
          color: "#2978B5",
        },
        // headerTransparent: true,
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="back" iconName={"chevron-back"} onPress={() => navigation.goBack()} iconSize={40} color={"#2978B5"} />
          </HeaderButtons>
        ),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="profile" iconName={"person-circle-outline"} onPress={() => navigation.navigate("Profile")} iconSize={30} />
          </HeaderButtons>
        ), 
      })}
    >
  
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ title: "", headerRight: false }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2978B5",
    elevation: 8,
    borderRadius: 30,
    height: 45,
    justifyContent: "center",
    width: 250,
    alignSelf: "center",
  },
});