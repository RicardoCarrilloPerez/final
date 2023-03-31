import React, { useState } from 'react'
import { IWish } from '../interfaces/IWish';

const useWish = () => {

    const defaultItem:IWish = { id: 0, text: '' };
    const defaultArray:IWish[] = [];

    const [list, setList] = useState(defaultArray);
    const [item, setItem] = useState(defaultItem);

    const handleAddItem = () => {

        const { text } = item;
        
        if (text.trim().length === 0) {
            return;
        }
        
        setList((currentList) => [...currentList, item]);
        setItem(defaultItem);
    }

    const handleInputChange = ({ nativeEvent: { text } }: any) => {
        setItem({ id: Math.random(), text });
    }

    const handleDeleteItem = ( id?:number ) => {
        const newList = list.filter((element) => element.id != id);
        setList(newList);
    }

    return (
        {
            item, list, handleAddItem, handleInputChange, handleDeleteItem
        }
    )
}

export default useWish
