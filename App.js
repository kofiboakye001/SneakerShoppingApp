import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Login from "./screens/Login"
import Home from "./screens/Home"
import Cart from "./screens/Cart"
import Input from "./screens/Input"
import Signup from "./screens/Signup"
import Items from "./screens/Items"

export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigator.Navigator initialRouteName="Login" >
         <MainNavigator.Screen name = "Home" component={Home} />
         <MainNavigator.Screen name = "Login" component={Login} />
         <MainNavigator.Screen name = "Cart" component={Cart} />
         <MainNavigator.Screen name = "Input" component={Input} />
         <MainNavigator.Screen name = "Signup" component={Signup} />
         <MainNavigator.Screen name = "Items" component={Items} />
        </MainNavigator.Navigator>
        
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
