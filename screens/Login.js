import React from "react";
import { View, Text, Image, TouchableOpacity,ImageBackground, StyleSheet } from "react-native";
import {AntDesign} from '@expo/vector-icons'

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
        <ImageBackground source={{uri: "https://i.pinimg.com/originals/4c/52/97/4c5297b1a347d051533c39e3f630a274.jpg"}} resizeMode="cover" style={styles.image}>
          <View style={{ justifyContent: "center", alignItems: "center"}}>
        <Image 
        style={{
            width: 300,
            height: 300,
            borderRadius: 40,
                marginBottom: 30
        }}
        source={{uri: "https://coloringhome.com/coloring/9ip/bap/9ipbapd5T.jpg"}} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Input")
          }}
            style={{ backgroundColor: "black", 
            padding: 10,
            paddingHorizontal: 70,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 25}}
        >
            <AntDesign name="google" size={24} color="#fcfbf4" />
                <Text style={{fontSize: 15, color: 'white', marginLeft: 15}}>Login with Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
              navigation.navigate("Input")
          }}
            style={{ 
            backgroundColor: "#e5e4e4", 
            padding: 10,
            paddingHorizontal: 70,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10}}
        >
            <AntDesign name="apple1" size={24} color="black" />
                <Text style={{fontSize: 15, color: 'black', marginLeft: 15}}>Login with Apple</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={() => {
              navigation.navigate("Signup")
          }}>
        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color :'black'}}>
            Not a member? <Text style={{color :"green", fontWeigth: 'bold' }}>Signup</Text>
            </Text>
        </TouchableOpacity>
    </View>
        </ImageBackground>
      </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });