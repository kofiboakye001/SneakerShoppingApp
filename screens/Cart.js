import React from "react";
import { View,Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, ScrollView} from "react-native";


export default function Cart({navigation}) {

  return (
    <View style={{flex: 1, backgroundColor :'white',}}>
      <ScrollView>
      <Text style={{marginLeft:20, marginTop:10, fontSize: 25, fontWeight:"bold", fontStyle: "italic"}}>My Cart</Text>
      <TouchableOpacity 
      onPress={() => {
        navigation.navigate("Items")
     }}
      style={{ backgroundColor: "#c5bdfd", paddingHorizontal: 50, padding: 8,marginRight: 10,marginLeft: 10, marginTop: 10,
            flexDirection: "row",
            borderRadius: 13,
            }}>
            <Image style={{width: 120,height: 80, marginLeft: -40, borderRadius: 10}}source={require('../assets/images/barca.jpeg')} />
           <Text style={{ fontStyle: "italic", marginLeft: 10, marginBottom: 5, fontWeight: "bold", fontSize: 17}}>Nike SB Dunk Low Barcelona Catalonia</Text>
           <Text style={{marginLeft: 20, marginBottom: 5, fontWeight: "bold", fontSize: 25, marginTop: 65, marginLeft:-220}}>$75.00</Text>
            <Text style={{fontStyle: "italic", color: "white", marginLeft: 20, marginBottom: 5, fontWeight: "bold", fontSize: 18, marginTop: 45, marginLeft:-80}}>Size: 41</Text>
            </TouchableOpacity>
            <Text style={{fontStyle: "italic", marginTop: 20, marginLeft: 20, fontSize: 15}}>Add a discount code</Text>

            <SafeAreaView style={{alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row"}}>
              <TextInput 
              placeholder="Discount Code" placeholderTextColor="#297542" 
              autoCorrect={false} style={styles.input} 
              style={{ backgroundColor: "white", 
              padding: 10,
              borderColor: "black",
              borderWidth: 1,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 5,
              marginTop: 10,
            marginLeft: 20}}
            />
            <TouchableOpacity
            style={{ backgroundColor: "green", 
            padding: 5,
            paddingHorizontal: 10,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
          marginRight: 170}}
        >
                <Text style={{fontSize: 15, color: 'white'}}>Redeem </Text>
        </TouchableOpacity>
              </SafeAreaView>
            <Text style={{marginTop:20, marginLeft:20, fontSize: 23, fontWeight: "bold"}}> Select a Delivery Type</Text>
            <TouchableOpacity style={{padding: 5, paddingHorizontal: 50, borderColor: "black", borderWidth: 0.5, borderRightWidth:0, marginTop: 10}}>
            <Text style={{marginTop:20, marginLeft:20, fontSize: 20, fontWeight: "bold", marginLeft: -30, marginTop: 5}}> Delivery</Text>
            <Text style={{fontStyle: "italic", marginTop:5, marginLeft:20, fontSize: 13,marginLeft: -30, marginTop: 5}}> Your order will be delivered to an address of your choice</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{padding: 5, paddingHorizontal: 50, borderColor: "black", borderWidth: 0.5, borderRightWidth:0,}}>
            <Text style={{marginTop:20, marginLeft:20, fontSize: 20, fontWeight: "bold", marginLeft: -30, marginTop: 5}}> Click & Collect Delivery </Text>
            <Text style={{fontStyle: "italic", marginTop:5, marginLeft:20, fontSize: 13,marginLeft: -30, marginTop: 5}}> Delivered to store in 3-5 days. Selected stores only</Text>
             </TouchableOpacity> 

             <View style={{backgroundColor: "#f4f5f7", marginLeft:20, padding: 5, paddingHorizontal:-10, borderColor:"black", borderWidth:1, 
             borderRightWidth:0, borderTopWidth:0, borderLeftWidth:0, marginRight: 20, marginTop: 10, alignItems: "flex-start", 
             justifyContent: "space-between", flexDirection: "row"}}>
               <Text style={{fontSize: 17}}> Cart Total</Text>
               <Text style={{fontSize: 17}}>$75.00</Text>
                 </View> 

                 <View style={{backgroundColor: "#f4f5f7", marginLeft:20, padding: 5, paddingHorizontal:-10, borderColor:"black", borderWidth:1, 
             borderRightWidth:0, borderTopWidth:0, borderLeftWidth:0, marginRight: 20, marginTop: 10, alignItems: "flex-start", 
             justifyContent: "space-between", flexDirection: "row"}}>
               <Text style={{fontSize: 17}}> Discount</Text>
               <Text style={{fontSize: 17}}>$3.89</Text>
                 </View>

                 <View style={{backgroundColor: "#f4f5f7", marginLeft:20, padding: 5, paddingHorizontal:-10, borderColor:"black", borderWidth:1, 
             borderRightWidth:0, borderTopWidth:0, borderLeftWidth:0, marginRight: 20, marginTop: 10, alignItems: "flex-start", 
             justifyContent: "space-between", flexDirection: "row"}}>
               <Text style={{fontSize: 17}}> Standard Delivery</Text>
               <Text style={{fontSize: 17}}>FREE</Text>
               </View>

               <View style={{backgroundColor: "#f4f5f7", marginLeft:20, padding: 5, paddingHorizontal:-10, borderColor:"black", borderWidth:1, 
             borderRightWidth:0, borderTopWidth:0, borderLeftWidth:0, marginRight: 20, marginTop: 10, alignItems: "flex-start", 
             justifyContent: "space-between", flexDirection: "row"}}>
               <Text style={{fontSize: 17}}> Cart Total</Text>
               <Text style={{fontSize: 17}}>$75.00</Text>
                 </View>  
                 <TouchableOpacity style={{ backgroundColor: "#fad50b", paddingHorizontal: 50, padding: 8,marginRight: 10,marginLeft: 10, marginTop: 20,marginBottom: 20,
            flexDirection: "row",
            borderRadius: 13,
            }}> 
            <Image style={{alignContent: 'center', marginLeft:50, width: 190,height: 50}}source={require('../assets/images/paypal.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
            navigation.navigate("MCheck")
          }} style={{ backgroundColor: "#f4f5f7", paddingHorizontal: 50, padding: 4,marginRight: 10,marginLeft: 10,marginBottom: 20,
            flexDirection: "row",
            borderRadius: 13,
            }}> 
            <Image style={{alignContent: 'center', marginLeft:40, width: 80,height:65}}source={require('../assets/images/ms.png')} />
            <Image style={{alignContent: 'center', marginLeft:30, marginTop: 10, width: 130,height:40}}source={require('../assets/images/visa.png')} />
            </TouchableOpacity>
                 </ScrollView>
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
  section: {
    padding: 5,
    borderBottomWidth: 1,
    borderTopWidth:1,
    borderTopColor: '#cccccc',
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
});

