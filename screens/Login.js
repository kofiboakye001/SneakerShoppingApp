import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {AntDesign} from '@expo/vector-icons'

export default function Login({navigation}) {
    return (
        
    <View style={{flex: 1, backgroundColor :'white', justifyContent: "center", alignItems: "center"}}>
        <Image 
        style={{
            width: 300,
            height: 300,
            borderRadius: 40,
                marginBottom: 30
        }}
        source={{uri: "https://coloringhome.com/coloring/9ip/bap/9ipbapd5T.jpg"}} />
        <Text style={{ color :"#4eb3fa", fontSize: 18}}>Welcome to the Sneaker Shopping App</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home")
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
              navigation.navigate("Home")
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
        
        <TouchableOpacity>
        <Text style={{fontSize: 15, marginTop: 10, fontWeight: 'bold', color :'black'}}>
            Not a member? <Text style={{color :"#4eb3fa", fontWeigth: 'bold' }}>Signup</Text>
            </Text>
        </TouchableOpacity>
    </View>
    );
}
