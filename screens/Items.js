import React from "react";
import { SafeAreaView, StyleSheet,View, TouchableOpacity, Text, Image } from "react-native";

export default function Items({navigation}) {


  return (
  <View style={{ flex: 1, backgroundColor:"white", justifyContent: "flex-start", alignItems: "center"}}>
     <Image style={{marginBottom: 30,width: 340,height: 260,}}source={require('../assets/images/barcelona.png')} />
            <View style={styles.section}>
                <Text style={{marginLeft: 10, marginBottom: 5, fontWeight: "bold", fontSize: 20}}>Nike SB Dunk Low Barcelona Catalonia</Text>
                <Text style={{marginLeft: 20, marginBottom: 5, fontWeight: "bold", fontSize: 25}}>$75</Text>
    <SafeAreaView style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginBottom: 5}}>
        <TouchableOpacity style={{ backgroundColor: "#6e9dfd", 
            padding: 5,height: 50,paddingHorizontal: 15,flexDirection: "row",alignItems: "center",
            borderRadius: 13,marginHorizontal: 10,borderColor:"#6e9dfd",borderWidth: 1.5,
            }}>
            <Text style={{color: 'white',fontWeight: "bold"}}>41</Text>
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

        <TouchableOpacity style={{ backgroundColor: "white", 
           padding: 5,height: 50,paddingHorizontal: 15,flexDirection: "row",alignItems: "center",
           borderColor:"#6e9dfd",borderWidth: 2,marginHorizontal: 10,borderRadius: 13,
            }}>
          <Text style={{color: 'black',fontWeight: "bold"}}>43</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "white", 
           padding: 5,height: 50,paddingHorizontal: 15,flexDirection: "row",alignItems: "center",
           borderColor:"#6e9dfd",borderWidth: 2,marginHorizontal: 10,borderRadius: 13,
            }}>
          <Text style={{color: 'black',fontWeight: "bold"}}>43</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "white", 
           padding: 5,height: 50,paddingHorizontal: 15,flexDirection: "row",alignItems: "center",
           borderColor:"#6e9dfd",borderWidth: 2,marginHorizontal: 10,borderRadius: 13,
            }}>
          <Text style={{color: 'black',fontWeight: "bold"}}>43</Text>
        </TouchableOpacity>
</SafeAreaView>
        </View>
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

