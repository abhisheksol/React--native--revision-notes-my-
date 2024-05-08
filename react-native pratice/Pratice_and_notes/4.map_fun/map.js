import React from 'react'
import { View,FlatList,Text} from "react-native";
function flatlist() {
    const user=[
        { id: '1', name: 'Abhishek ' },
    { id: '2', name: 'Vivek ' },
    { id: '3', name: 'Taaha ' },
    { id: '4', name: 'Om ' },
    { id: '5', name: 'Rahul ' },
    ]

 


  return (
    <View style={{}}>
      <Text style={{color:'yellow', fontSize:25,}}>Hello!, every One</Text>
      {user.map((item,key)=>(
        <View key={key}>
            <Text >{key+1}. {item.name}</Text>
        </View>
      ))}
       
    </View>
  )
}

export default flatlist

{/* <View style={{}}>
  <Text style={{color:'yellow', fontSize:25}}>Hello!, everyone</Text>
  {user.map((item,key)=>(
    <View key={key}>
      <Text>{item.name}</Text>
    </View>
  ))}
</View> */}