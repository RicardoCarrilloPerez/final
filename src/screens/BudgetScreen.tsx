import React, { useState } from "react";
import MyButton from '../components/MyButton'
import { useNavigation } from '@react-navigation/native';
import { ImageBackground,View, TouchableOpacity, StyleSheet, Text, Image,Button} from 'react-native';
import Icono from 'react-native-vector-icons/AntDesign';

const image = {uri: 'https://user-images.githubusercontent.com/5600126/47879786-42fc5700-de00-11e8-8ffc-70ff651b4a8b.gif'};

function BudgetScreen(){
    const navigation = useNavigation();
    const tope = 0;
    const initialBudget = 1000;
    let [budget,setBudget] = useState(initialBudget);
    
    const increase = (value:number = 1) =>{
        setBudget(budget + value );
        if(budget < 0){
            
        }
    }
    const decrease = (value:number = 1) =>{
        setBudget(budget-value);
    }
    let colorText = "black";
    if(budget>initialBudget){
        colorText = "red";
    }else{
        colorText = "black";
    }
    const styles = StyleSheet.create({
        mainText:{
            fontWeight:'bold',
            textAlign: 'center',
            fontSize:40
        },
        secondaryText: {
            textAlign:'center',
            fontSize:20,
            color:colorText,
        },
        image: {
            flex: 1,
            justifyContent: 'center',
          },
          text: {
            color: 'white',
            fontSize: 42,
            lineHeight: 84,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#000000c0',
          },
    });
    
    return(



        
        
        <View style={{flex:5, marginTop:5,alignContent:'center'}}>
            <View style={{flex:1, alignSelf:"flex-start",justifyContent:"center",}}>
                <Icono name='up' />

            </View>
            <View style={{ flex:2 }}>
                <Text style = {styles.mainText}>Presupuesto: {initialBudget} </Text>
                <Text style={[styles.secondaryText]}>Mi presupesto actual { budget }</Text>

            </View>
            <View style={{ flex:2, flexDirection:"row"}}>
                <MyButton title="Sumar" onPress={() => increase(100)} color="red"/>
                <MyButton title="Restar" onPress={() =>(budget<=0)? setBudget(budget = 0) : decrease(50)} color="purple"/>
                

       

            </View>




    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <   Text style={styles.text}>OwO</Text>
    </ImageBackground>
    <Button
        title="Go to Screen2"
        onPress={() => navigation.navigate('DataInputScreen')}
      />
          
        </View>









    );
    
}

export default BudgetScreen;