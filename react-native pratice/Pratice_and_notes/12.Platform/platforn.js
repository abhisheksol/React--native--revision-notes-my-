import React from 'react'
import { View,Text,Platform } from 'react-native'

function platforn() {
  return (
    <View>
     <Text>{Platform.OS}</Text>
    </View>
  )
}

export default platforn