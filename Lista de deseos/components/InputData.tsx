import React from 'react'
import { View, StyleSheet, TextInput, TouchableHighlight, Text } from 'react-native';
import { IWish } from '../interfaces/IWish';

interface Props {
    item: IWish,
    handleAddItem: () => void,
    handleInputChange: ({ nativeEvent: { text } }: any) => void,  
}

const InputData = ({ item, handleAddItem, handleInputChange }: Props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Lista de deseos'
                onChange={handleInputChange} value={item.text} />
            <TouchableHighlight style={styles.button} onPress={handleAddItem}>
                <Text>Agregar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    textInput: {
        borderWidth: 1,
        width: '70%',
        margin: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#0096FF',
        padding: 15

    },
});
export default InputData
