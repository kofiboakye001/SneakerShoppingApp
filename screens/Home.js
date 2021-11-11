import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Animated, Dimensions, SafeAreaView, TextInput} from "react-native";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { Ionicons } from '@expo/vector-icons';

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
                <View>
                    <Image style={{
            width: 500,
            height: 300,
            marginLeft: -50,
        }} source={require('../assets/images/shoe1.png')} />
                </View>
            </ImageHeaderScrollView>
        </View>


  );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        color: 'white',
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