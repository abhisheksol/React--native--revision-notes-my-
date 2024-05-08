import React from 'react'
import { View,Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function tab1() {
    const Tab=createBottomTabNavigator()
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