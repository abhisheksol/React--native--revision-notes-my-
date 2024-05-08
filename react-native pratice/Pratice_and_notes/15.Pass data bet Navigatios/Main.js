import React from 'react'
import { View ,Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nav1s from './nav1'
import Navs2 from './nav2';
function nav1() {
    const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name={'Nav1'} component={Nav1s}/>
        <Stack.Screen name={'Nav2'} component={Navs2}/>
    </Stack.Navigator>
  )
}

export default nav1