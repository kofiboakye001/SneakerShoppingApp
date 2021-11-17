import React from "react";
import { View,Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, ScrollView} from "react-native";


export default function MCheck ({navigation}) {

  return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View>
          <Text style={{marginTop:20, marginLeft:40}}>Card Number</Text>
    <TouchableOpacity style={{ backgroundColor: "#f4f5f7", paddingHorizontal: 50, padding: 4,marginRight: 10,marginLeft: 10,marginBottom: 20, marginTop: 20,
    flexDirection: "row",
    borderRadius: 13,
    }}> 
    <SafeAreaView style={{alignItems: "center", marginLeft: 50}}>
      <TextInput
      secureTextEntry
        placeholder="CardNum" placeholderTextColor="#297542" 
        autoCorrect={false} style={styles.input} 
        style={{ backgroundColor: "#f4f5f7", 
        padding: 5,
        paddingHorizontal: 90,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 15}}
      />
      </SafeAreaView>
    <Image style={{alignContent: 'center', marginLeft:-300, width: 80,height:65}}source={require('../assets/images/ms.png')} />
    </TouchableOpacity>

    <Text style={{marginLeft:30}}>CVV</Text>

    <SafeAreaView style={{alignItems: "center", marginLeft: 10}}>
      <TextInput
      secureTextEntry
        placeholder="CardNum" placeholderTextColor="#297542" 
        autoCorrect={false} style={styles.input} 
        style={{ backgroundColor: "#f4f5f7", 
        padding: 20,
        paddingHorizontal: 160,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 15}}
      />
      <TouchableOpacity style={{ backgroundColor: "#fad50b", paddingHorizontal: 40, padding: 20,marginRight: 10,marginLeft: 10, marginTop: 20,marginBottom: 20,
            flexDirection: "row",
            borderRadius: 13,
            }}> 
            <Text> Proceed to Checkout</Text>
            </TouchableOpacity>
      </SafeAreaView>

        </View>
          
      </View>
  )};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });