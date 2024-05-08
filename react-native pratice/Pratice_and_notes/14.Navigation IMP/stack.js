import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Radio from '../13.Web-View/webview'

function stack() {
  const Stack = createNativeStackNavigator()
  return (

    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Radio} />
    </Stack.Navigator>



  )
}

function Login(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}> Welcome to Login Page </Text>
      <TouchableOpacity>
        <Text style={{backgroundColor:'green' ,height:35,padding:8,borderRadius:8,elevation:15}} onPress={()=>props.navigation.navigate('Home')}>Go to Home</Text>
      </TouchableOpacity> 
    </View>
  )
}

export default stack