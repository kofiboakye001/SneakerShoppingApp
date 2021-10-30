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
        
     <View style={{ flex: 3, backgroundColor: "white", 
     }}>
          <Text style={{ color :"#4eb3fa", fontSize: 10, marginLeft: 130, fontWeight: 'bold', marginTop: 5}}>Welcome to the Sneaker Shopping App</Text>
          <Text style={{color: 'orange', marginLeft: 170, fontSize: 10 }}> Nike section </Text>
         <View 
            style={{
                height: 10,
                width: 100,
                marginRight: 15,
                shadowColor: "#4e4f72",
                shadowOpacity: 0.2,
                shadowRadius: 30,
                shadowOffset: {
                    width: 10,
                    height: 20,
                },
                borderRadius: 40,
                elevation: 30,
                marginVertical: -25,
                alignItems: 'center',
                justifyContent: 'center',
            }}
         >
         <Image 
           style={{
            zIndex: 10,
            marginTop: -45,
            marginLeft: 20,
            width: 105,
            height: 100,
            borderRadius: 200,
                marginBottom: 0
        }}
         source={{uri: "https://logodix.com/logo/999359.jpg"}} />
         </View>
     </View>
       
    </View>
  );

}