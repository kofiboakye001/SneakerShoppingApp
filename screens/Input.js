import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity, Text, ImageBackground } from "react-native";

export default function Input({navigation}) {


  return (
    <View style={styles.container}>
        <ImageBackground 
        imageStyle={{ opacity: 0.3,backgroundColor: 'white'}}
        source={{uri: "https://i.pinimg.com/originals/4c/52/97/4c5297b1a347d051533c39e3f630a274.jpg"}} resizeMode="cover" style={styles.image}>
  <View style={{ justifyContent: "center", alignItems: "flex-start"}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green', alignItems: "flex-start", marginLeft: 50}}>Login</Text>
      <View style={{ justifyContent: "center", alignItems: "flex-start", marginLeft: 50, }}>
      <Text style={{fontSize: 20, color: '#5e5f60'}}>Please sign in to continue.</Text>
      </View>
    <SafeAreaView style={{alignItems: "center", marginLeft: 50}}>
      <TextInput
        placeholder="Email or Username" placeholderTextColor="#297542" 
        autoCorrect={false} style={styles.input} 
        style={{ backgroundColor: "white", 
        padding: 10,
        paddingHorizontal: 90,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 25}}
      />
      <TextInput
      secureTextEntry
       placeholder="        Password" placeholderTextColor="#297542" 
       autoCorrect={false} style={styles.input} 
       style={{ backgroundColor: "white", 
       padding: 10,
       paddingHorizontal: 80,
       flexDirection: "row",
       alignItems: "center",
       borderRadius: 10,
       marginTop: 25}}
      />
      <TouchableOpacity style={{ justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 13, color: '#5e5f60', marginTop: 10}}>Forgot Password?.</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home")
          }}
            style={{ backgroundColor: "green", 
            padding: 10,
            paddingHorizontal: 30,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 15}}
        >
                <Text style={{fontSize: 15, color: 'white'}}>Login</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </View>
    </ImageBackground>
    </View>
  );
};

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

