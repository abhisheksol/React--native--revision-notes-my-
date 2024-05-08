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
      <FlatList
      
      data={user}
      renderItem={({item,index})=><Text style={{color:'blue',fontSize:20,backgroundColor:'grey',marginTop:15,flex:1}}>{index+1}. {item.name}</Text>}
      keyExtractor={item=>item.id}
      />

    </View>
  )
}

export default flatlist