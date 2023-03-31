import React from "react";
import BudgetScreen from "../screens/BudgetScreen";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props{
    title: string,
    onPress: (value?: number) => void,
    color: string
}


const MyButton = ({ title, onPress, color}: Props) => {
    var colorb = color;
    const styles = StyleSheet.create({
        button:{
            paddingHorizontal:8,
            paddingVertical:6,
            borderRadius: 4,
            backgroundColor:colorb,
            alignSelf:"flex-start",
            marginHorizontal: '1%',
            marginBottom: 6,
            minWidth: '48%',
            textAlign: "center"
        },
        label: {
            textAlign: 'center',
            marginBottom: 10,
            fontSize:24
        }
    })
    return(
        
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
            <Text style={styles.label}> {title} </Text>
        </TouchableOpacity>
    )
    
}



export default MyButton