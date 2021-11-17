import React from "react";
import { SafeAreaView, StyleSheet,View, TouchableOpacity, Text, Image, ScrollView } from "react-native";

export default function ftc({navigation}) {


  return (
  <View style={{ flex: 1, backgroundColor:"white", justifyContent: "flex-start", alignItems: "center"}}>
     <ScrollView>
     <Image style={{marginLeft:20, marginBottom: 30,width: 360,height: 220,}}source={require('../assets/images/tokyo.png')} />
            <View style={styles.section}>
              <View style={{flexDirection: "row", justifyContent: "space-between",}}>
            <Image style={{marginLeft:5, marginBottom: 20, marginTop: 5, width: 140,height: 110,}}source={require('../assets/images/t1.jpeg')} />
            <Image style={{marginLeft:0, marginBottom: 20, marginTop: 5, width: 120,height: 110,}}source={require('../assets/images/t2.jpg')} />
            <Image style={{marginLeft:0, marginBottom: 20, marginTop: 5, width: 120,height: 110,}}source={require('../assets/images/t3.jpg')} />
                </View>
                <Text style={{marginLeft: 10, marginBottom: 5, fontWeight: "bold", fontSize: 20}}>Nike SB Dunk Low Pro FTC Lagoon Pulse</Text>
                <Text style={{marginLeft: 20, marginBottom: 5, fontWeight: "bold", fontSize: 25}}>$75</Text>
    <SafeAreaView style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginBottom: 5}}>
        <TouchableOpacity style={{ backgroundColor: "#6e9dfd", 
            padding: 5,height: 50,paddingHorizontal: 15,flexDirection: "row",alignItems: "center",
            borderRadius: 13,marginHorizontal: 10,borderColor:"#6e9dfd",borderWidth: 1.5,
            }}>
            <Text style={{color: 'white',fontWeight: "bold"}}>39</Text>
           </TouchableOpacity>

           <TouchableOpacity style={{ backgroundColor: "white", 
           padding: 5,height: 50,paddingHorizontal: 15,flexDirection: "row",alignItems: "center",
           borderColor:"#6e9dfd",borderWidth: 2,marginHorizontal: 10,borderRadius: 13,
            }}>
            <Text style={{color: 'black',fontWeight: "bold"}}>40</Text>
           </TouchableOpacity>

           <TouchableOpacity style={{ backgroundColor: "white", 
           padding: 5,height: 50,paddingHorizontal: 15,flexDirection: "row",alignItems: "center",
           borderColor:"#6e9dfd",borderWidth: 2,marginHorizontal: 10,borderRadius: 13,
            }}>
          <Text style={{color: 'black',fontWeight: "bold"}}>41</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "white", 
           padding: 5,height: 50,paddingHorizontal: 15,flexDirection: "row",alignItems: "center",
           borderColor:"#6e9dfd",borderWidth: 2,marginHorizontal: 10,borderRadius: 13,
            }}>
          <Text style={{color: 'black',fontWeight: "bold"}}>42</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "white", 
           padding: 5,height: 50,paddingHorizontal: 15,flexDirection: "row",alignItems: "center",
           borderColor:"#6e9dfd",borderWidth: 2,marginHorizontal: 10,borderRadius: 13,
            }}>
          <Text style={{color: 'black',fontWeight: "bold"}}>43</Text>
        </TouchableOpacity>
        
</SafeAreaView>
           <View style={{alignContent: "center",padding: 5, paddingHorizontal: 10, borderColor: "black", borderBottomWidth: 0, borderWidth: 0.5, borderRightWidth:0, borderLeftWidth:0,marginTop: 5}}>
           <TouchableOpacity style={{ backgroundColor: "white", 
           padding: 5,height: 50,paddingHorizontal: 15,flexDirection: "row",alignItems: "center",
           borderColor:"#6e9dfd",borderWidth: 2,marginHorizontal: 10,borderRadius: 13,
            }}>
          <Text style={{marginLeft:110, color: 'black',fontWeight: "bold", fontSize: 20}}>Add to Cart</Text>
        </TouchableOpacity>
           </View>
           <View style={{padding: 5, paddingHorizontal: 10, borderColor: "black", borderBottomWidth: 0, borderWidth: 0.5, borderRightWidth:0, borderLeftWidth:0,marginTop: 5}}>
            <Text style={{marginTop:20, marginLeft:20, fontSize: 20, fontWeight: "bold", marginLeft: 10, marginTop: 5}}> Description</Text>
            <Text style={{fontStyle: "italic", marginTop:5, marginLeft:20, fontSize: 13,marginLeft: 10, marginTop: 1}}> Nike and Dutch artist and sneaker collab veteran Parra teamed up for an Olympic inspired Nike SB Dunk Low with the Nike SB Dunk Low Parra Abstract Art.</Text>
             </View>
             <View style={{padding: 5, paddingHorizontal: 10, borderColor: "black", borderBottomWidth: 0, borderWidth: 0.5, borderLeftWidth:0, borderRightWidth:0, marginTop: 5}}>
            <Text style={{marginTop:20, marginLeft:20, fontSize: 20, fontWeight: "bold", marginLeft: 10, marginTop: 5}}> Colorway</Text>
            <Text style={{fontStyle: "italic", marginTop:5, marginLeft:20, fontSize: 13,marginLeft: 10, marginTop: 1}}> FIRE PINK/GYM RED-MOCHA-WHITE-ROYAL BLUE-BLACK</Text>
             </View>
        </View>
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

