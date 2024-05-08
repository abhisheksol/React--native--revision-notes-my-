
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'


function form() {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState("")
  const [Detials, setDetials] = useState(false)
  const submit = () => {
    console.warn(Name);
    console.warn(Email);
    console.log(Detials);
  }
  return (
    <View>
      <Text style={{ fontSize: 20,color:'black' }}>Abhishek</Text>
      <TextInput
        style={{ borderColor: 'red', borderWidth: 1, padding: 5, width: 155 ,color:'black'}}
        placeholder='Name'
        onChangeText={text => setName(text)}
      // value=''
      />

      <TextInput
        style={{ borderColor: 'red', borderWidth: 1, padding: 5, width: 155, marginTop: 11, marginBottom: 11,color:'black' }}
        placeholder='Email'
        onChangeText={text => setEmail(text)}
      // value=''
      />

      <Button
        onPress={submit}
        title='Submit' />
      <Button onPress={()=>setDetials(!Detials)} 
      
      title={Detials? "hide Details":"Show Details"}
       color={'green'}  />

   {
    Detials?
    <View>
      <Text>Ur name:{Name}</Text>
      <Text>Ur Email:{Email}</Text>
      
      </View>
    :null
   }
    

    </View>
  )
}

export default form