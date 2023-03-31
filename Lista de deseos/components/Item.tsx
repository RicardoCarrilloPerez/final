import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { IWish } from '../interfaces/IWish';


interface Props {
    wish: IWish,
    handleDeleteItem: (id?:number) => void 
}

const Item = ({wish: { id, text }, handleDeleteItem}: Props) => {
    return (
        <Pressable onPress={() => handleDeleteItem(id) }>
            <View key={id} style={styles.wishItem}>
                <Text style={styles.wishText} > {text}  </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    wishItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#89CFF0',
    },
    wishText: {
        color: 'white',
    }
});

export default Item
