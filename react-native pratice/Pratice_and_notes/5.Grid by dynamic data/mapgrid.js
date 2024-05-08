import React from 'react'
import { View,Text ,StyleSheet,Button,ScrollView } from "react-native";

function grid() {
    const user=[
        { id: '1', name: 'Abhishek ' },
    { id: '2', name: 'Vivek ' },
    { id: '3', name: 'Taaha ' },
    { id: '4', name: 'Om ' },
    { id: '5', name: 'Rahul ' },
   
        { id: '1', name: 'Abhishek ' },
    { id: '2', name: 'Vivek ' },
    { id: '3', name: 'Taaha ' },
    { id: '4', name: 'Om ' },
    { id: '5', name: 'Rahul ' },
   
        { id: '1', name: 'Abhishek ' },
    { id: '2', name: 'Vivek ' },
    { id: '3', name: 'Taaha ' },
    { id: '4', name: 'Om ' },
    { id: '5', name: 'Rahul ' },
   
        { id: '1', name: 'Abhishek ' },
    { id: '2', name: 'Vivek ' },
    { id: '3', name: 'Taaha ' },
    { id: '4', name: 'Om ' },
    { id: '5', name: 'Rahul ' },
   
        { id: '1', name: 'Abhishek ' },
    { id: '2', name: 'Vivek ' },
    { id: '3', name: 'Taaha ' },
    { id: '4', name: 'Om ' },
    { id: '5', name: 'Rahul ' },
   
    ]

  return (
    <ScrollView >
    <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:"center",marginTop:100}}>
        
      {
        user.map((item,index)=>(
            <View>
            <Text style={styles.item}>{item.name}</Text>
            <Button title='Present' color={'green' }style={styles.btn}/>
            {/* <Button title='absent' color={'red' }style={styles.btn} /> */}
            </View> 
        ))
      }
    </View></ScrollView>
  )


  
  
}
const styles = StyleSheet.create({
    item: {
     backgroundColor:'pink',
     margin:5, 
     height:55,
     width:100,
     padding:15,
     borderWidth:1,
     borderRadius:15
     
      
    },
    
  });

export default grid