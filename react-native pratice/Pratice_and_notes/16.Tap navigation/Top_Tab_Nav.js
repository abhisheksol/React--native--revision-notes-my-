import React from 'react'
import { View,Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
function tab1() {
    const Tab=createMaterialTopTabNavigator()
  return (
    <Tab.Navigator>
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='SignUp' component={SignUp} />
    </Tab.Navigator>
  )
}

function Login() {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:25}}>Login Page</Text>
        </View>
    )
}
function SignUp() {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text  style={{fontSize:25}}>SignUp Page</Text>
        </View>
    )
}

export default tab1



