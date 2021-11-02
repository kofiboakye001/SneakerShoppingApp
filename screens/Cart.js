import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cart(){
    return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: "center", alignItems: "flex-start", flexDirection: "row"}}>
            <MaterialCommunityIcons name="progress-check" size={24} color="black" />
        </View>

    );
}