import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";


export default function Home() {
    return (
     <View style={{ flex: 1, }}>
       <View style={{ flex: 1, 
        backgroundColor :'#956de6', 
        paddingTop: 8, 
        paddingHorizontal: 10,
        }}
       >
           <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
               <Image source={('./assets/4ee012904c8ddc5f79d115a0b98b9262.png')} />
           <TouchableOpacity style={{ backgroundColor :"#cabae9", padding: 0.2,
            paddingHorizontal: 1,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 7,
            }}>
               <Ionicons name="menu" size={27} color="white" />
           </TouchableOpacity>
           <TouchableOpacity style={{ backgroundColor :"#cabae9", padding: 4.7,
            paddingHorizontal: 50,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            }}>
                <Text style={{fontSize: 15, color: 'white', marginLeft: 15}}>Search the Sneaker Store</Text>
            </TouchableOpacity>
                <View style={{flexDirection: "row"}}>
                    <AntDesign name="search1" size={24} color="white" />
                    <Ionicons name="notifications" size={24} color="white" />
                </View>
           </View>
     </View>
     <View style={{ flex: 3, backgroundColor: "white"}}>

     </View>
    </View>
  );

}