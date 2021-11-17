import React from "react";
import { View,Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, ScrollView} from "react-native";


export default function MCheck ({navigation}) {

  return (
      <View>
          <TouchableOpacity style={{ backgroundColor: "#f4f5f7", paddingHorizontal: 50, padding: 4,marginRight: 10,marginLeft: 10,marginBottom: 20,
    flexDirection: "row",
    borderRadius: 13,
    }}> 
    <Image style={{alignContent: 'center', marginLeft:40, width: 80,height:65}}source={require('../assets/images/ms.png')} />
    <Image style={{alignContent: 'center', marginLeft:30, marginTop: 10, width: 130,height:40}}source={require('../assets/images/visa.png')} />
    </TouchableOpacity>
      </View>
  )};