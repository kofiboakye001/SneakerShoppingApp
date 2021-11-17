import React from "react";
import { ScrollView, SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity, Text, ImageBackground } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Signup({navigation}) {


  return (
    
    <View style={styles.container}>
        <ImageBackground 
        imageStyle={{ opacity: 0.3,backgroundColor: 'white'}}
        source={{uri: "https://i.pinimg.com/originals/4c/52/97/4c5297b1a347d051533c39e3f630a274.jpg"}} resizeMode="cover" style={styles.image}>
          <ScrollView>
            <View style={{ justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green',marginTop: 30}}>Create Account</Text>
    <SafeAreaView>
      
      <View style={styles.wrapper}>
        <View style={{flexDirection: "row", marginHorizontal: 0}}>
        <View style={{flex: 1}}>  
      <TextInput
        placeholder="First Name" placeholderTextColor="black" 
        autoCorrect={false} style={styles.input} 
        style={{ backgroundColor: "white", 
        padding: 10,
        paddingHorizontal: 10,
        marginRight: 20,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 25}}
      />
      </View>
      <View style={{flex: 1}}>
      <TextInput
        placeholder="Last Name" placeholderTextColor="black" 
        autoCorrect={false} style={styles.input} 
        style={{ backgroundColor: "white", 
        padding: 10,
        paddingHorizontal: 10,
        marginLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 25}}
      />
      </View>
        </View>
      </View>
      <TextInput
        placeholder="Email " placeholderTextColor="black" 
        autoCorrect={false} style={styles.input} 
        style={{ backgroundColor: "white", 
        padding: 10,
        paddingHorizontal: 100,
        flexDirection: "row",
        alignContent: "flex-end",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 5}}
      />
      <TextInput
        placeholder="Username " placeholderTextColor="black" 
        autoCorrect={false} style={styles.input} 
        style={{ backgroundColor: "white", 
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 5}}
      />
      <TextInput
      secureTextEntry
       placeholder="Password" placeholderTextColor="black" 
       autoCorrect={false} style={styles.input} 
       style={{ backgroundColor: "white", 
       padding: 10,
       flexDirection: "row",
       alignItems: "center",
       borderRadius: 10,
       marginTop: 5}}
      />
      <TextInput
      secureTextEntry
       placeholder="Confirm Password" placeholderTextColor="black" 
       autoCorrect={false} style={styles.input} 
       style={{ backgroundColor: "white", 
       padding: 10,
       flexDirection: "row",
       alignItems: "center",
       borderRadius: 10,
       marginTop: 5}}
      />
    </SafeAreaView>
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
            marginTop: 13}}
        >
                <Text style={{fontSize: 15, color: 'white'}}>Signup</Text>
        </TouchableOpacity>
          <Text style={{fontSize: 15, fontWeight: "bold", color: 'black', marginTop: 5}}>OR</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 10, marginLeft: 120}}>
           <TouchableOpacity 
            style={{ backgroundColor: "white", 
            padding: 5,
            height: 50,
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 23,
            }}>
            <Entypo name="facebook" size={26} color="blue" />
           </TouchableOpacity>
           
           <TouchableOpacity 
            style={{ backgroundColor: "white", 
            padding: 5,
            height: 50,
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 23,
            }}>
            <AntDesign name="instagram" size={24} color="rgb(225, 48, 108), cmyk(6,95,36,0)" />
           </TouchableOpacity>
           
          <TouchableOpacity
          style={{ backgroundColor: "white", 
          padding: 5,
          height: 50,
          paddingHorizontal: 15,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 23,
          marginRight: 100,
        }}
      >
          <Entypo name="twitter" size={24} color="#33bcfb" />
        </TouchableOpacity>
           </View> 
           </ScrollView>
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

  wrapper: {
  
  },
  inputLabels: {
      fontSize: 16,
      color: '#000000',
      marginBottom: 7,
  },
  inputField: {
      backgroundColor: '#EEEEEE',
      padding: 10,
      color: '#505050',
      height: 50
  },
  inputWrapper: {
      paddingBottom: 20,
  },
  saveBtn: {
      backgroundColor: '#003E7D',
      alignItems: 'center',
      padding: 12,
  },
  saveBtnText: {
      color: '#FFFFFF',
      fontSize: 18,
  }

});
