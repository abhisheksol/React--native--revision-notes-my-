import { useState } from 'react'
import { View, Text, Button,TextInput } from 'react-native'

function Nav1s(props) {
    const [name, setname] = useState('None')
    const [age, setage] = useState('None')
    console.warn({name,age});
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:25,}}>This is Nav1</Text>

           <TextInput 
           placeholder='Enter the Name'
           style={{borderColor:'pink',borderWidth:2,shadowColor:'black',elevation:50,margin:25, padding:8,width:250}}
           onChangeText={(text)=>setname(text)}
           />
           <TextInput 
           placeholder='Enter the Age'
           style={{borderColor:'pink',borderWidth:2,shadowColor:'black',elevation:50,margin:25, padding:8,width:250}}
           onChangeText={(text)=>setage(text)}
           />


            <Button
            title='Submit'
            onPress={()=>props.navigation.navigate('Nav2',data={name,age})}
            />
        </View>
    )
}

export default Nav1s

// ()=>props.navigation.navigate('Home')