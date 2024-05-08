import React from 'react';
import { View, Text } from 'react-native';

function flex() {
  return (
    <View>
      <View style={{ backgroundColor: '#FF742D', flex:2,flexDirection:'column'}}>
      <View style={{flex:1, backgroundColor:'red',width:50}}></View>
      </View>
      <View style={{ backgroundColor: 'rgb(254,252,253)', flex:1,flexDirection:'column',width:500}}>
       
      </View>
      <View style={{ backgroundColor: 'rgb(49,119,65)', flex:1,flexDirection:'column'}}>
       
      </View>
    </View>
  );
}

export default flex;
