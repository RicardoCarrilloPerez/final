import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { IWish } from '../interfaces/IWish';
import Item from './Item';

interface Props {
    elements: IWish[], 
    handleDeleteItem: (id? :number) => void,
}
const ListData = ({ elements, handleDeleteItem }: Props) => {
      return (
        <ScrollView >
            { elements.map((element) => <Item  key={element.id} wish={element} handleDeleteItem={handleDeleteItem} />) }           
        </ScrollView>
    )
}
export default ListData
