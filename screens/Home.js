import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Animated, Dimensions, SafeAreaView, TextInput, ScrollView} from "react-native";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 130

export default function Home({navigation}) {
    const offset = useRef(new Animated.Value(0)).current;

    
    
    return (
        <View style={styles.container}>
            <ImageHeaderScrollView
             maxHeight={MAX_HEIGHT}
             minHeight={MIN_HEIGHT}
             renderHeader={() => (
                 <Image source={{uri: "https://i.pinimg.com/originals/4c/52/97/4c5297b1a347d051533c39e3f630a274.jpg"}} style={styles.image} />
             )}
             renderForeground={() => (
               <View style={styles.titleContainer} >
                 <Text style={styles.imageTitle}> SNEAKER SHOP</Text>
               </View>
             )}
            >
                <TriggeringView style={styles.section}>
                    <View>
                    
                    <SafeAreaView style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
      <TouchableOpacity 
           onPress={() => {
               navigation.navigate("Cart")
            }}
           style={{ backgroundColor :"#cabae9", padding: 0.6,
            paddingHorizontal: 1,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 7,
            }}>
               <Ionicons name="menu" size={27} color="white" />
           </TouchableOpacity>
           <TextInput
        placeholder="Enter Search " placeholderTextColor="white" 
        autoCorrect={false} style={styles.input} 
        style={{ backgroundColor: "#cabae9", 
        padding: 4,
        paddingHorizontal: 100,
        borderRadius: 10,}} />
      </SafeAreaView>
                    </View>
                </TriggeringView>
            </ImageHeaderScrollView>
           <ScrollView>
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: -110}}>
                <TouchableOpacity 
            style={{ backgroundColor: "#fbebb4", 
            padding: 5,
            marginLeft: 20,
            height: 180,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 23,
            }}>
              <MaterialIcons style={{marginBottom:130}} name="favorite-border" size={24} color="white" />
             <Text style={{color: 'white', marginTop: 40, }}>Air Force 1 Low</Text>
            <Image style={{
            marginBottom: 80,  
            width: 150,
            height: 110,
            marginLeft: -125,
            }} 
            source={require('../assets/images/barcelona.png')} />
           </TouchableOpacity>
           
           <TouchableOpacity 
            style={{ backgroundColor: "#dedfe1", 
            padding: 5,
            height: 180,
            paddingHorizontal: 25,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 23,
            marginLeft: -20,
            marginRight: 20,
            }}>
              <MaterialIcons style={{marginBottom:130, marginLeft: -15}} name="favorite-border" size={24} color="white" />
              <Text style={{color: 'white', marginTop: 40, }}>Nike SB Dunk Low</Text>
              <Text style={{color: 'white', marginTop: 80, marginLeft: -125, marginRight: 10}}>Pro FTC Lagoon Pulse</Text>
            <Image style={{
          width: 120,
          height: 100,
          marginBottom: 65,
          marginLeft: -140,
        }} source={require('../assets/images/ftc-lagoon.png')} />
           </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity 
            style={{ backgroundColor: "#f6d9b8", 
            padding: 5,
            height: 180,
            paddingHorizontal: 25,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 23,
            marginLeft: 20,
            marginRight: 20,
            }}>
              <MaterialIcons style={{marginBottom:130, marginLeft: -15}} name="favorite-border" size={24} color="white" />
              <Text style={{color: 'white', marginTop: 40, }}>Nike SB Dunk Low</Text>
              <Text style={{color: 'white', marginTop: 80, marginLeft: -85, marginRight: 20}}>Georgetown</Text>
            <Image style={{
          width: 130,
          height: 110,
          marginBottom: 65,
          marginLeft: -140,
        }} source={require('../assets/images/georgetown.png')} />
           </TouchableOpacity>
           <TouchableOpacity 
            style={{ backgroundColor: "#fbb0a3", 
            padding: 5,
            marginLeft: 0,
            marginRight: 15,
            height: 180,
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 23,
            }}>
              <MaterialIcons style={{marginBottom:130}} name="favorite-border" size={24} color="white" />
             <Text style={{color: 'white', marginTop: 40, }}>Air Force 1 Low</Text>
            <Image style={{
            marginBottom: 80,  
            width: 150,
            height: 90,
            marginLeft: -125,
            }} 
            source={require('../assets/images/tokyo.png')} />
           </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity 
            style={{ backgroundColor: "red", 
            padding: 5,
            height: 180,
            paddingHorizontal: 25,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 23,
            marginLeft: 20,
            marginRight: 20,
            }}>
              <MaterialIcons style={{marginBottom:130, marginLeft: -15}} name="favorite-border" size={24} color="white" />
              <Text style={{color: 'white', marginTop: 40, }}>Nike SB Dunk Low</Text>
              <Text style={{color: 'white', marginTop: 80, marginLeft: -85, marginRight: 20}}>Georgetown</Text>
            <Image style={{
          width: 130,
          height: 110,
          marginBottom: 65,
          marginLeft: -140,
        }} source={require('../assets/images/Af1.png')} />
           </TouchableOpacity>
           <TouchableOpacity 
            style={{ backgroundColor: "#c7e8e9", 
            padding: 5,
            marginLeft: 0,
            marginRight: 15,
            height: 180,
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 23,
            }}>
              <MaterialIcons style={{marginBottom:130}} name="favorite-border" size={24} color="white" />
             <Text style={{color: 'white', marginTop: 40, }}>Air Max 270</Text>
            <Image style={{
            marginBottom: 80,  
            width: 150,
            height: 90,
            marginLeft: -105,
            }} 
            source={require('../assets/images/airmax270.png')} />
           </TouchableOpacity>
           </View>
            </View>
           </ScrollView>
        </View>


  );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
      },
      title: {
        fontSize: 20,
      },
      name: {
        fontWeight: 'bold',
      },
      section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
      },
      categories: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      },
      categoryContainer: {
        flexDirection: 'row',
        backgroundColor: '#FF6347',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        paddingHorizontal: 15,
      },
      category: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10,
      },
      titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageTitle: {
        color: 'blue',
        backgroundColor: 'transparent',
        fontSize: 24,
      },
      navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 40 : 5,
        opacity: 0,
      },
      navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
      },
      sectionLarge: {
        minHeight: 300,
      },
});